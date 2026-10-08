# Critique comparative des propositions de design

Les trois propositions ont été générées par l'IA à partir du brief, du persona (Léa, 17 ans) et du wireframe. Chacune montre les mêmes 3 écrans du flow principal : **Recherche → Résultats → Fiche rando**.

| | Fichier | Direction |
|---|---|---|
| A | [`propositions/proposition_1.png`](propositions/proposition_1.png) | « Sentier » : nature, couleurs douces, grandes images |
| B | [`propositions/proposition_2.png`](propositions/proposition_2.png) | « Trail » : sportif, mode sombre, accent néon |
| C | [`propositions/proposition_3.png`](propositions/proposition_3.png) | « Horaire » : signalétique des transports publics, très fonctionnel |

## Critères d'évaluation
1. **Fidélité au persona** : est-ce que ça répond aux besoins et au niveau de Léa ?
2. **Respect du user flow et du wireframe** : mêmes écrans, mêmes actions ?
3. **Lisibilité et hiérarchie** : voit-on tout de suite l'essentiel ?
4. **Accessibilité** : contraste, taille des zones tactiles, langue
5. **Info transports publics** : le besoin n°2 de Léa est-il visible ?
6. **Faisabilité en 4 semaines**

---

## Proposition A — « Sentier »

**Points forts**
- Ambiance chaleureuse et rassurante, qui donne envie de sortir : bon accord avec l'esprit « balade du samedi ».
- Grandes cartes avec image : on reconnaît vite le type de paysage.
- Gros boutons arrondis (52 px), libellés clairs et tutoyés : « Trouver une balade », « Ajouter aux favoris ».
- La fiche résume bien les 4 infos clés en une seule ligne.
- Respecte fidèlement le wireframe : 2 onglets, mêmes écrans et mêmes actions.

**Points faibles**
- ⚠️ **Le départ en transports n'apparaît pas sur les cartes des résultats** : seulement dans la fiche, et en petit gris. C'est pourtant le critère n°2 de Léa.
- Les grandes images font qu'on ne voit que **2 résultats par écran** : il faut beaucoup défiler pour comparer.
- **Bug de mise en page** : sur l'écran Recherche, le champ de recherche recouvre le sous-titre « Ta prochaine balade commence ici ».
- Les gris clairs (« 8 balades trouvées », « Départ : gare de Cully ») ont un contraste un peu faible.
- Les puces de filtre passent sur 2 lignes.

## Proposition B — « Trail »

**Points forts**
- Style moderne et dynamique, qui peut plaire à un public jeune.
- Liste compacte : 4 résultats visibles d'un coup, avec la difficulté en badge de couleur.
- Le profil d'altitude sur la fiche est une info utile pour juger la difficulté.

**Points faibles**
- ⚠️ **Hors persona** : l'écran d'accueil met en avant des statistiques (km, D+), qui conviennent à un sportif, pas à Léa qui veut juste « sortir marcher ».
- ⚠️ **Ajoute un 3e onglet « Stats »** qui n'est ni dans le brief ni dans le wireframe : plus de travail et plus de complexité.
- **Mélange anglais / français** (« Go », « Saved », « Easy », « Back », « Save ») : moins clair pour Léa et incohérent.
- **Contraste insuffisant** : textes gris foncé sur fond noir (infos des cartes, onglets inactifs), étoiles de favori très petites (< 44 px).
- La difficulté repose surtout sur la **couleur** (vert, jaune, rouge), ce qui pose problème aux daltoniens.
- Toujours **aucune info sur l'arrêt ou la gare de départ** dans les résultats.

## Proposition C — « Horaire »

**Points forts**
- ⚠️ **La seule qui répond vraiment au besoin transports** : chaque résultat affiche « BUS Sallaz · 6 min à pied » ou « TRAIN Cully · 12 min ». La fiche donne même l'aller et le retour.
- **Contraste maximal** (noir sur blanc, blanc sur rouge), grands champs et gros boutons : la plus accessible des trois.
- Le filtre « Temps disponible » sur l'accueil répond directement à « peu de temps libre ».
- La durée est mise en avant à gauche, comme une heure dans un horaire : on compare très vite.
- Tout est en français, les libellés sont clairs.

**Points faibles**
- Look **austère**, proche d'une app administrative : peu de plaisir, pas d'image du paysage, donc moins d'envie de sortir.
- Le rouge vif partout fatigue un peu et ressemble à de l'alerte.
- Le bouton « Voir l'horaire » demande un lien avec un service d'horaires externe : hors du périmètre des 4 semaines.
- Le titre « Gorges du Chauderon » et l'info de départ passent sur 2 lignes : la liste est un peu dense.

---

## Tableau récapitulatif

Note sur 5 pour chaque critère.

| Critère | A · Sentier | B · Trail | C · Horaire |
|---|:-:|:-:|:-:|
| Fidélité au persona | 4 | 2 | 4 |
| Respect du flow / wireframe | 5 | 3 | 4 |
| Lisibilité et hiérarchie | 3 | 3 | 5 |
| Accessibilité | 3 | 2 | 5 |
| Info transports publics | 2 | 1 | 5 |
| Envie / attrait visuel | 5 | 4 | 2 |
| Faisabilité en 4 semaines | 4 | 3 | 3 |
| **Total / 35** | **26** | **18** | **28** |

## Conclusion et choix

**La proposition B est écartée** : elle s'éloigne du persona (stats sportives, onglet en plus), mélange les langues et a des problèmes de contraste.

**Je retiens une combinaison de A et C** :
- **Base visuelle de A** : couleurs nature, cartes arrondies, ton chaleureux, pour donner envie à Léa de sortir.
- **Logique d'information de C** : le badge **BUS / TRAIN + arrêt** sur chaque carte de résultat, la durée bien visible, le fort contraste des textes et les filtres en un seul bloc d'une ligne.

**Corrections à faire pour la maquette finale**
1. Ajouter l'arrêt ou la gare de départ sur chaque carte des Résultats.
2. Réduire la hauteur des images des cartes pour voir au moins 3 résultats.
3. Foncer les textes gris pour atteindre un contraste WCAG AA (4,5:1).
4. Corriger le chevauchement du champ de recherche sur l'écran d'accueil.
5. Ne pas reprendre « Voir l'horaire » ni les « Stats » : hors du périmètre.
