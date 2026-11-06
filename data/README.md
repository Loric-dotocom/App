# Données de Balado

| Fichier | Atelier | Rôle |
|---|---|---|
| `../data.json` | e3-2 | Base principale : 32 fiches de randonnées |
| `schema.json` | S10-AV1 | Schéma JSON Schema draft-07 qui valide `data.json` |
| `data-avance.json` | S10-AV2 | Échantillon enrichi : coordonnées GPS + horaires de desserte |

## Lien avec l'app

Les champs viennent directement du [brief](../brief.md), du [user flow](../Design/user_flow.md), de la [maquette](../Design/maquette/index.html) et des [tests utilisateurs](../Design/tests-utilisateurs.md) :

| Champ | Type | Utilisé par |
|---|---|---|
| `id` | entier | lien vers la fiche, favoris dans le `localStorage` |
| `titre` | texte | carte des Résultats, titre de la Fiche |
| `commune`, `region` | texte | Fiche |
| `lieu` | texte | **filtre de la Recherche** : ville tapée par Léa (Lausanne, Morges, Vevey, Montreux, Cully, Yverdon-les-Bains, Nyon — les mêmes que les suggestions du site) |
| `description` | texte | Fiche |
| `prixMoyen` | nombre | prix du billet aller demi-tarif depuis le `lieu`, en CHF (Léa a le demi-tarif). `0` = départ à pied |
| `estOuvert` | booléen | `false` = sentier fermé pour l'hiver (sommets) |
| `duree` | entier (min) | carte + Fiche, ex. `90` → « 1 h 30 » |
| `distance` | nombre (km) | carte + Fiche |
| `denivele` | entier (m) | Fiche |
| `difficulte` | `Facile` / `Moyen` / `Difficile` | **puces de filtre** des Résultats (mêmes libellés) |
| `transport` | `BUS` / `TRAIN` | badge de la carte |
| `arretDepart` | texte | carte, ex. « Arrêt Sallaz » |
| `acces` | texte | carte, ex. « puis 6 min à pied » / « 12 min de train » (correctif 1 du test utilisateur : on dit toujours **quel moyen** et **quelle durée**) |
| `tags` | tableau de textes | mots-clés (minuscules, sans accents) |
| `image` | texte | photo de la carte et de la Fiche |

Chaque `lieu` a au moins une rando **Facile**, une **Moyen** et une **Difficile**, pour que le filtre ne donne jamais de liste vide. Les 6 premières fiches sont celles de la maquette, avec les mêmes valeurs.

## Validation de `data.json` (S10-AV1)

Le schéma vérifie pour chaque fiche :

- **Champs obligatoires** : `id`, `titre`, `commune`, `prixMoyen` (demandés par la fiche), plus tous les champs que l'app affiche.
- **Types** : `id`, `duree` et `denivele` sont des entiers, `prixMoyen` et `distance` des nombres, `estOuvert` un booléen, `tags` un tableau de chaînes.
- **Valeurs minimales** : `id ≥ 1`, `prixMoyen ≥ 0`, `duree ≥ 10`, `distance > 0`, `denivele ≥ 0`.
- **Valeurs autorisées** : `difficulte`, `transport` et `region` sont limités à une liste.
- **Format** : `image` doit être `images/nom.jpg`, les heures `HH:MM`.
- **Pas de clé inconnue** (`additionalProperties: false`) : une faute de frappe comme `prix` au lieu de `prixMoyen` est signalée.

### Valider dans VS Code

Le fichier `.vscode/settings.json` relie `data.json` et `data/data-avance.json` au schéma : toute erreur est soulignée en rouge dans l'éditeur.

### Valider en ligne

1. Ouvrir <https://www.jsonschemavalidator.net/>.
2. Coller `schema.json` à gauche et `data.json` à droite.
3. Le message attendu est « No errors found. JSON validates against the schema ».

## Données avancées (S10-AV2)

`data-avance.json` reprend les 6 randos de la maquette avec tous leurs champs et ajoute deux sous-objets (optionnels dans le schéma) :

- `coordonnees` : `{ "lat": …, "lng": … }` — point de départ (gare ou arrêt) en WGS84, en Suisse romande, pour une future carte.
- `horaires` : une clé par jour (`lundi` … `dimanche`). Chaque jour contient un tableau de plages `{ "debut": "HH:MM", "fin": "HH:MM" }` pendant lesquelles **le départ est desservi** par les transports publics. Pour Léa, c'est l'info utile : savoir si elle peut y aller et **rentrer** sans voiture. Plusieurs plages par jour sont possibles (ex. bus de nuit le week-end, pause de midi du funiculaire), un tableau vide `[]` veut dire « pas de desserte ».

Les horaires sont inventés mais réalistes.
