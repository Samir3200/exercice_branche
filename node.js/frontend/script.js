
console.log("script.js chargé");

document.addEventListener("DOMContentLoaded", () => {

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

  const welcome = document.getElementById("welcome");
  const menuList = document.getElementById("menu-list");

  if (welcome && menuList) {
    const prenom = localStorage.getItem("prenom") || "invité";
    welcome.textContent = `Bienvenue ${prenom} ! 👋`;

    fetch("http://localhost:3000/env")
      .then(res => res.json())
      .then(envData => {
       
        return fetch("http://localhost:3000/menus");
      })
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
        menuList.innerHTML = "<p>Impossible de charger le menu</p>";
      });
  }
});





