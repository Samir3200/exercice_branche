// === Fonction pour récupérer les menus ===
async function fetchMenus() {
    try {
        const res = await fetch("http://localhost:3000/menus");
        const menus = await res.json();

        const ul = document.getElementById("menu-list");
        if (!ul) return;

        ul.innerHTML = "";

        menus.forEach((plat) => {
            const li = document.createElement("li");
            const emoji = document.createElement("span");
            emoji.textContent = plat.image;
            li.appendChild(emoji);
            const nameEl = document.createElement("strong");
            nameEl.textContent = plat.plate;
            li.appendChild(nameEl);
            const desc = document.createElement("p");
            desc.textContent = plat.description;
            li.appendChild(desc);
            const btn = document.createElement("button");
            btn.textContent = "Commander";

            // Quand on clique
            btn.addEventListener("click", async () => {
                localStorage.setItem("selectedOrder", JSON.stringify(plat));
                window.location.href = "orders.html";
            });
            li.appendChild(btn);
            ul.appendChild(li);
        });
    } catch (err) {
        console.error("Erreur fetchMenus :", err);
    }
}

// === Fonction pour afficher la commande sur orders.html ===
document.addEventListener("DOMContentLoaded", () => {
    const plat = JSON.parse(localStorage.getItem("selectedOrder"));
    const platDiv = document.getElementById("plat");
    const descDiv = document.getElementById("description");

    if (plat && platDiv && descDiv) {
        platDiv.textContent = plat.plate;
        descDiv.textContent = plat.description;
    }
});

// Lancer fetchMenus seulement si on est sur menu.html
if (document.getElementById("menu-list")) {
    fetchMenus();
}
