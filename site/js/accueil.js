// =========================================================
// Balado – Page d'accueil
// =========================================================

// ----- Vérification du champ de recherche (wireframe 1b) -----
const formulaire = document.querySelector(".recherche");
const champLieu = document.querySelector("#lieu");
const messageErreur = document.querySelector("#erreur-lieu");

formulaire.addEventListener("submit", function (event) {
  if (champLieu.value.trim() === "") {
    event.preventDefault(); // on n'envoie pas le formulaire
    formulaire.classList.add("recherche--erreur");
    champLieu.setAttribute("aria-invalid", "true");
    messageErreur.textContent = "⚠ Écris une ville ou un arrêt pour lancer la recherche.";
    champLieu.focus();
  }
});

// L'erreur disparaît dès que Léa recommence à écrire
champLieu.addEventListener("input", function () {
  formulaire.classList.remove("recherche--erreur");
  champLieu.removeAttribute("aria-invalid");
  messageErreur.textContent = "";
});

// ----- Bouton cœur (visuel seulement pour l'instant) -----
// TODO : enregistrer les favoris dans le localStorage
const coeurs = document.querySelectorAll(".coeur");

coeurs.forEach(function (coeur) {
  coeur.addEventListener("click", function () {
    const estFavori = coeur.getAttribute("aria-pressed") === "true";
    coeur.setAttribute("aria-pressed", String(!estFavori));
    coeur.textContent = estFavori ? "♡" : "♥";
  });
});
