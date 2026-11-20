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

// ----- Chargement des randos depuis data.json (fetch) -----
const listeIdees = document.querySelector("#liste-idees");
const etatIdees = document.querySelector("#etat-idees");

// Les 3 randos mises en avant (mêmes que la maquette)
const ID_IDEES = [1, 3, 4];

// 90 → "1 h 30", 120 → "2 h", 45 → "45 min"
function formaterDuree(minutes) {
  const heures = Math.floor(minutes / 60);
  const reste = minutes % 60;
  if (heures === 0) return reste + " min";
  if (reste === 0) return heures + " h";
  return heures + " h " + String(reste).padStart(2, "0");
}

// Choisit le dégradé de la photo selon les mots-clés
function classePhoto(tags) {
  if (tags.includes("vignes")) return "carte__photo--vignes";
  if (tags.includes("gorges")) return "carte__photo--gorges";
  return "carte__photo--foret";
}

// Crée le HTML d'une carte à partir d'une fiche de data.json
function creerCarte(rando) {
  const li = document.createElement("li");
  li.className = "carte";
  li.innerHTML = `
    <div class="carte__photo ${classePhoto(rando.tags)}" aria-hidden="true"></div>
    <div class="carte__texte">
      <h3 class="carte__nom"><a href="fiche.html?id=${rando.id}">${rando.titre}</a></h3>
      <p class="carte__infos">${formaterDuree(rando.duree)} · ${rando.distance} km
        <span class="badge badge--${rando.difficulte.toLowerCase()}">${rando.difficulte}</span></p>
      <p class="carte__depart"><span class="badge badge--transport">${rando.transport}</span>
        ${rando.arretDepart} · ${rando.acces}</p>
    </div>
    <button type="button" class="coeur" aria-pressed="false"
            aria-label="Ajouter ${rando.titre} aux favoris">♡</button>
  `;
  return li;
}

fetch("../data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Erreur HTTP " + reponse.status);
    }
    return reponse.json(); // transforme le texte JSON en tableau JavaScript
  })
  .then(function (randos) {
    console.log("Données reçues de data.json :", randos);

    const idees = randos.filter(function (rando) {
      return ID_IDEES.includes(rando.id);
    });

    idees.forEach(function (rando) {
      listeIdees.appendChild(creerCarte(rando));
    });

    etatIdees.textContent = ""; // on enlève « Chargement… »
  })
  .catch(function (erreur) {
    console.error(erreur);
    etatIdees.textContent = "⚠ Impossible de charger les randos. Réessaie plus tard.";
  });

// ----- Bouton cœur (visuel seulement pour l'instant) -----
// TODO : enregistrer les favoris dans le localStorage
// Les cartes sont créées après le fetch : on écoute donc les clics sur la liste
// entière (« délégation d'événement ») plutôt que sur chaque cœur.
listeIdees.addEventListener("click", function (event) {
  const coeur = event.target.closest(".coeur");
  if (!coeur) return;

  const estFavori = coeur.getAttribute("aria-pressed") === "true";
  coeur.setAttribute("aria-pressed", String(!estFavori));
  coeur.textContent = estFavori ? "♡" : "♥";
});
