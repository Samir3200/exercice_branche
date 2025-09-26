
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";
dotenv.config();

// Connexion à PostgreSQL
const client = new Client({
  connectionString: process.env.psql,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log("✅ Connecté à PostgreSQL"))
  .catch(err => console.error("❌ Erreur connexion PostgreSQL:", err));

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Servir tes fichiers HTML/JS/CSS depuis un dossier "public"
app.use(express.static("public"));

// ROUTES

// Liste des plats
app.get("/menus", async (req, res) => {
  try {
    const result = await client.query("SELECT id, plate, description, image FROM menus");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Ajouter une commande
app.post("/orders", async (req, res) => {
  try {
    const { id, plate, clientName } = req.body;
    if (!id || !clientName) {
      return res.status(400).json({ ok: false, error: "id et clientName requis" });
    }

    const result = await client.query(
      "INSERT INTO orders (id_menu, client_name) VALUES ($1, $2) RETURNING *",
      [id, clientName]
    );

    res.json({ ok: true, message: `Commande enregistrée pour ${plate}`, order: result.rows[0] });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Impossible d'enregistrer la commande" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
