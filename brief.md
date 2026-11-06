# Brief — Balado

Projet M291 · Application mobile

## Le projet en une phrase
**Balado** permet de trouver rapidement une petite randonnée près de chez soi, adaptée au temps dont on dispose et accessible en transports publics, puis de la garder en favori.

## Problème
Les jeunes sans voiture qui veulent marcher le week-end doivent comparer plusieurs sites de randonnée pensés pour les automobilistes. Ils perdent du temps, ne savent pas si le départ est accessible en bus ou en train, et finissent souvent par ne pas sortir.

## Public cible
Jeunes de 16 à 25 ans, apprentis ou étudiants, sans voiture, avec peu de temps libre.
Persona de référence : **Léa, 17 ans, apprentie à Lausanne** → voir [`Design/persona.md`](Design/persona.md).

## Tâche principale (flow)
Léa tape où elle habite dans la barre de recherche, l'app lui propose plusieurs randonnées de la plus facile à la plus difficile, elle ouvre une fiche et l'ajoute à ses favoris.
→ voir [`Design/user_flow.md`](Design/user_flow.md).

## Fonctionnalités
**Incluses (MVP)**
- Recherche par ville ou arrêt de départ
- Liste de résultats avec filtre de difficulté (Facile / Moyen / Difficile)
- Fiche détail : durée, distance, dénivelé, difficulté, gare ou arrêt de départ, description, photo
- Favoris enregistrés localement sur le téléphone

**Volontairement exclues**
- Compte utilisateur et serveur
- Carte, GPS, météo, avis

## Écrans
1. **Recherche** (accueil)
2. **Résultats**
3. **Fiche rando**
4. **Favoris**

Wireframe → [`Design/wireframes/wireframe.html`](Design/wireframes/wireframe.html)

## Données
**32 fiches de randonnées** inventées mais réalistes, dans un fichier JSON local : [`data.json`](data.json).

- Chaque fiche contient : nom (`titre`), commune, région, **lieu de recherche**, description, prix du billet, ouvert ou fermé, durée, distance, dénivelé, difficulté, **BUS / TRAIN + arrêt de départ + temps d'accès**, mots-clés et photo.
- 7 lieux de recherche (Lausanne, Morges, Vevey, Montreux, Cully, Yverdon-les-Bains, Nyon), chacun avec au moins une rando Facile, Moyen et Difficile.
- Les 6 premières fiches sont celles de la maquette et du wireframe (Bois de Sauvabelin, Lavaux, Gorges du Chauderon…).
- Le fichier est validé par un schéma : [`data/schema.json`](data/schema.json). Une version enrichie avec coordonnées GPS et horaires de desserte se trouve dans [`data/data-avance.json`](data/data-avance.json).
- Détail de chaque champ → [`data/README.md`](data/README.md).

## Contraintes
- 4 semaines de développement
- Interface simple et accessible : zones tactiles ≥ 44 px, contraste fort, textes courts
- Fonctionne sans connexion à un serveur

## Critères de réussite
- Léa trouve et met en favori une rando adaptée en **moins d'une minute**
- Elle atteint son objectif en **4 écrans maximum**
- Chaque action a un retour visible (chargement, confirmation, état vide, erreur)

## Contenu du dépôt
| Fichier | Contenu |
|---|---|
| `brief.md` | Ce brief |
| `Design/pitch.md` | Pitch initial de l'app |
| `Design/persona.md` | Persona Léa |
| `Design/user_flow.md` | User flow détaillé + diagramme Mermaid |
| `Design/wireframes/` | Wireframe basse fidélité (HTML + PNG) |
| `Design/propositions/` | 3 propositions de design générées par l'IA |
| `Design/critique.md` | Critique comparative des 3 propositions |
| `Design/tests-utilisateurs.md` | Audit d'accessibilité et test utilisateur |
| `Design/maquette/` | Maquette cliquable |
| `site/` | Site : page d'accueil responsive |
| `data.json` | Base de données : 32 randonnées |
| `data/schema.json` | Schéma JSON qui valide `data.json` |
| `data/data-avance.json` | Données avec coordonnées GPS et horaires |
| `data/README.md` | Documentation des données |
