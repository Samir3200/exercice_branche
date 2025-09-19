import express from "express";
import cors from "cors";
import data from "./data.json" with { type: "json" };

const app = express();
const PORT = 3000;

// Autoriser le frontend (sur port 5500 si tu utilises Live Server)
app.use(cors({ origin: "http://127.0.0.1:5500" }));

// Route d'accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API Adalicious 🚀");
});

// Route menu
app.get("/menu", (req, res) => {
  res.json(data);
});

// Route menu/:id
app.get("/menu/:id", (req, res) => {
  const id = Number(req.params.id);
  const plat = data.find(p => p.id === id);
  if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });
  res.json(plat);
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
