

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

console.log(client)
client.connect().then(() => {
  console.log("Connecté à PostgreSQL");
}).catch(err => {
  console.error("Erreur connexion PostgreSQL:", err);
});

const app = express();
const PORT = 3000;


app.use(cors({ origin: "http://127.0.0.1:5500" }));

// Nouvelle route pour exposer la variable d'environnement
app.get("/env", (req, res) => {
  res.json({ db_link: process.env.psql });
});
app.get("/", (req, res) => {
  res.send("http://127.0.0.1/index.html");
});


app.get("/menus", async (req, res) => {
  try {
    // Remplace 'menu' par le nom de ta table réelle
    const result = await client.query("SELECT plate, description, image FROM menus");
    res.json(result.rows);
  } catch (err) {
    console.error("Erreur requête menu:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


app.get("/menu/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    // Remplace 'menu' par le nom de ta table réelle
    const result = await client.query("SELECT * FROM menu WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: `Plat id=${id} non trouvé` });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Erreur requête menu/:id:", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
