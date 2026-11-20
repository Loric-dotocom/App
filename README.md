# Balado — Trouve ta rando

Projet M291 · Développer des interfaces utilisateurs (UI)

**Balado** permet de trouver rapidement une petite randonnée près de chez soi, adaptée au temps dont on dispose et accessible en transports publics, puis de la garder en favori.

🔗 **Site en ligne (GitHub Pages) :** <https://loric-dotocom.github.io/App/>

## Public cible
Jeunes de 16 à 25 ans, apprentis ou étudiants, sans voiture, avec peu de temps libre.
Persona : **Léa, 17 ans, apprentie à Lausanne** → [`Design/persona.md`](Design/persona.md).

## Fonctionnalités
- Recherche par ville ou arrêt de départ, avec suggestions
- Idées de randos chargées depuis [`data.json`](data.json) avec `fetch()`
- Recherche optimisée avec un anti-rebond (*debounce*) de 300 ms
- Badges de difficulté (Facile / Moyen / Difficile) et de transport (BUS / TRAIN)
- Site responsive : barre de navigation en bas sur mobile, en haut sur grand écran

## Lancer le projet en local
`fetch()` ne fonctionne pas en ouvrant le fichier par double-clic (`file://`). Il faut un serveur local :

- **VS Code** : extension *Live Server* → clic droit sur `site/index.html` → *Open with Live Server*
- **ou Python** : `python -m http.server 8000` dans le dossier du projet, puis ouvrir <http://localhost:8000/site/index.html>

## Structure du dépôt
| Dossier / fichier | Contenu |
|---|---|
| [`brief.md`](brief.md) | Brief du projet |
| [`Design/`](Design/) | Pitch, persona, user flow, wireframes, propositions, critique, tests utilisateurs, maquette |
| [`site/`](site/) | Le site : `index.html`, `css/style.css`, `js/accueil.js` |
| [`data.json`](data.json) | Base de données : 32 randonnées |
| [`data/`](data/) | Schéma JSON de validation, données avancées (GPS, horaires) et documentation |
| [`exercices/s12/debounce.js`](exercices/s12/debounce.js) | Atelier S12-AV1 : anti-rebond sur le champ de recherche |

## Technologies
HTML, CSS, JavaScript (sans framework), JSON.
