// =========================================================
// S12-AV1 — Anti-rebond (debounce) sur le champ de recherche
// =========================================================

// ----- 1. Le minuteur setTimeout / clearTimeout -----
// setTimeout(fonction, ms) lance la fonction après « ms » millisecondes
// et renvoie un numéro de minuteur.
// clearTimeout(numero) annule ce minuteur s'il n'est pas encore parti.
// → Si on annule puis relance le minuteur à chaque frappe, la fonction
//   ne s'exécute qu'une seule fois, quand Léa arrête de taper.

// ----- 2. Fonction générique debounce(action, attenteMs) -----
// Renvoie une nouvelle fonction qui attend « attenteMs » ms de calme
// avant d'appeler « action ». Chaque nouvel appel remet le compteur à zéro.
function debounce(action, attenteMs) {
  let minuteur = null;

  return function (...args) {
    clearTimeout(minuteur); // on annule l'appel prévu
    minuteur = setTimeout(function () {
      action(...args); // aucune frappe depuis attenteMs → on exécute
    }, attenteMs);
  };
}

// ----- 3. Application sur le champ de recherche -----
const ATTENTE_RECHERCHE = 300; // ms après la dernière frappe

const champRecherche =
  typeof document !== "undefined" ? document.querySelector("#lieu") : null;

if (champRecherche) {
  let randos = [];

  // On charge les randos une seule fois
  fetch("../data.json")
    .then(function (reponse) {
      return reponse.json();
    })
    .then(function (donnees) {
      randos = donnees;
    })
    .catch(function (erreur) {
      console.error("Impossible de charger data.json :", erreur);
    });

  // Filtre les randos dont le lieu commence par le texte tapé
  function filtrerRandos(texte) {
    const recherche = texte.trim().toLowerCase();
    const resultats = randos.filter(function (rando) {
      return recherche !== "" && rando.lieu.toLowerCase().startsWith(recherche);
    });
    console.log(`Filtre exécuté pour « ${texte} » : ${resultats.length} rando(s)`);
    return resultats;
  }

  // Sans debounce : le filtre tournerait à chaque touche.
  // Avec debounce : il tourne une seule fois, 300 ms après la dernière touche.
  const filtrerAvecDebounce = debounce(filtrerRandos, ATTENTE_RECHERCHE);

  champRecherche.addEventListener("input", function () {
    filtrerAvecDebounce(champRecherche.value);
  });
}

// Permet de réutiliser / tester la fonction avec Node.js
if (typeof module !== "undefined") {
  module.exports = { debounce };
}
