// debug rapide pour voir si le script est chargé
console.log("script.js chargé");

document.addEventListener("DOMContentLoaded", () => {
  // ========================
  // Partie index.html
  // ========================
  const btn = document.getElementById("valider");
  const input = document.getElementById("prenom");

  if (btn) {
    // sécurité : s'assurer que le bouton est bien de type button
    btn.type = "button";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clic sur Valider"); // vérifie dans la console
      const prenom = (input && input.value) ? input.value.trim() : "";
      if (!prenom) {
        alert("Merci de saisir ton prénom !");
        return;
      }
      localStorage.setItem("prenom", prenom);
      window.location.href = "menu.html";
    });
  } else {
    console.log("Pas de bouton #valider sur cette page (normal si tu es déjà sur menu.html)");
  }

  // ========================
  // Partie menu.html
  // ========================
  const welcome = document.getElementById("welcome");
  const menuList = document.getElementById("menu-list");

  if (welcome && menuList) {
    const prenom = localStorage.getItem("prenom") || "invité";
    welcome.textContent = `Bienvenue ${prenom} !`;

    // fetch du menu depuis le backend
    fetch("http://localhost:3000/menu")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) data = [data];
        menuList.innerHTML = data.map(item => `
          <div class="menu-item">
            <h3>${item.plate} ${item.image || ""}</h3>
            <p>${item.description}</p>
          </div>
        `).join("");
      })
      .catch((err) => {
        console.error("Erreur fetch /menu :", err);
        menuList.innerHTML = `<p>⚠️ Impossible de charger le menu. Vérifie que ton backend tourne sur http://localhost:3000</p>`;
      });
  }
});
