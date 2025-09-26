
console.log("index.js chargé");

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
    })};
});



