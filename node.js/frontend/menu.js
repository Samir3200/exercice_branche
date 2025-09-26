const welcome = document.getElementById("welcome");
const menuList = document.getElementById("menu-list");

if (welcome && menuList) {
    const prenom = localStorage.getItem("prenom") || "invité";
    welcome.textContent = `Bienvenue ${prenom} ! 👋`;

    fetch("http://localhost:3000/menus")
        .then(res => res.json())
        .then(data => {
            menuList.innerHTML = ""; 

            data.forEach(item => {
                const li = document.createElement("li");

                li.innerHTML = `
          <span>${item.image}</span>
          <strong>${item.plate}</strong>
          <p>${item.description}</p>
          <button class="commander-btn">Commander</button>
        `;

                // Listener pour le bouton Commander
                li.querySelector(".commander-btn").addEventListener("click", () => {
                    const commande = {
                        id_menu: item.id,
                        plate: item.plate,
                        clientName: prenom
                    };

                    fetch("http://localhost:3000/orders", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(commande)
                    })
                        .then(resp => resp.json())
                        .then(() => {
                            alert(`✅ Commande envoyée pour ${item.plate}`);
                            window.location.href = "orders.html"; // redirection
                        })
                        .catch(err => {
                            console.error(err);
                            alert("❌ Impossible d'envoyer la commande");

                            localStorage.setItem("plate", plate);
                            window.location.href = "orders.html";
                        });
                });

                menuList.appendChild(li);
            });
        })
        .catch(err => {
            console.error("Erreur fetch :", err);
            menuList.innerHTML = "<p>Impossible de charger le menu</p>";
        });
}
