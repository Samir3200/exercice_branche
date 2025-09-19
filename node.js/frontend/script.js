// import http from "node:http"
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.setHeader("Content-Type", "text/plain; charset=utf-8");
//         res.end("Accueil");
//     }
//     else if (req.url === "/menu") {
//         // res.end("Voici le menu");
//         const data = { "plate": "Hello World Burger", "description": "Un cheeseburger classique (pain, steak, fromage, salade, sauce).", "image": "🍔" };
//         res.end(JSON.stringify(data));
//     }
//     else { res.statusCode = 404; res.end("Page non trouvée"); }
// });
// server.listen(3000, () => {
//     console.log("Serveur lancé sur http://localhost:3000");
// });


console.log("✅ script.js chargé");

document.addEventListener("DOMContentLoaded", () => {
  // Page index.html
  const btn = document.getElementById("valider");
  const input = document.getElementById("prenom");

  if (btn) {
    btn.addEventListener("click", () => {
      const prenom = input.value.trim();
      if (!prenom) {
        alert("Merci de saisir ton prénom !");
        return;
      }
      localStorage.setItem("prenom", prenom);
      window.location.href = "menu.html";
    });
  }

  // Page menu.html
  const welcome = document.getElementById("welcome");
  const menuList = document.getElementById("menu-list");

  if (welcome && menuList) {
    const prenom = localStorage.getItem("prenom") || "invité";
    welcome.textContent = `Bienvenue ${prenom} ! 👋`;

    fetch("http://localhost:3000/menu")
      .then(res => res.json())
      .then(data => {
        menuList.innerHTML = data.map(item => `
          <div class="menu-item">
            <h3>${item.plate} ${item.image}</h3>
            <p>${item.description}</p>
          </div>
        `).join("");
      })
      .catch(err => {
        console.error("Erreur fetch :", err);
        menuList.innerHTML = "<p>⚠️ Impossible de charger le menu</p>";
      });
  }
});





