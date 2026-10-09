# Tests utilisateurs & audit d'accessibilité — Balado

Atelier e2-7 · M291 · Norme **WCAG 2.2 niveau AA**

**Maquette testée :** [`Design/maquette/index.html`](maquette/index.html). C'est la version cliquable du design retenu dans la [critique](critique.md) : la base visuelle de la proposition A et les infos transports de la proposition C.
Pour l'ouvrir, télécharger le fichier puis l'ouvrir dans un navigateur (Chrome, Firefox, Edge). Elle fonctionne sans connexion.

---

## Partie 1 — Audit d'accessibilité

### 1.1 Contrastes

**Méthode :** chaque couleur de texte et de fond de la maquette a été mesurée avec la formule officielle de contraste WCAG (luminance relative).
Seuils : **4,5:1** pour le texte courant, **3:1** pour le grand texte (≥ 24 px, ou ≥ 19 px en gras) et pour les éléments d'interface (bordures, contour de focus).
👉 Vérification possible avec l'outil gratuit https://webaim.org/resources/contrastchecker/

#### Bouton principal

| Élément | Texte | Fond | Ratio mesuré | Exigé | Résultat |
|---|---|---|:-:|:-:|:-:|
| **Bouton « Trouver une balade » / « Ajouter aux favoris »** | `#FFFFFF` | `#2F5D43` | **7,59:1** | 4,5:1 | ✅ |

#### Palette de départ (proposition A) → palette corrigée (maquette)

| Élément | Avant | Ratio avant | Après | Ratio après | Exigé |
|---|---|:-:|---|:-:|:-:|
| Texte secondaire sur carte (« 1 h 30 · 5 km ») | `#7A837C` sur blanc | ❌ 3,91 | `#56615A` sur blanc | ✅ 6,46 | 4,5 |
| Compteur « 8 balades trouvées » | `#7A837C` sur `#FAF6EE` | ❌ 3,63 | `#56615A` sur `#FAF6EE` | ✅ 5,99 | 4,5 |
| « Départ : gare de Cully » | `#8A8F86` sur `#FAF6EE` | ❌ 3,07 | `#24352A` gras sur `#FAF6EE` | ✅ 12,04 | 4,5 |
| Texte d'exemple du champ de recherche | `#8A8F86` sur blanc | ❌ 3,31 | `#5F665E` sur blanc | ✅ 5,92 | 4,5 |
| Onglet inactif « Favoris » | `#9AA39C` sur blanc | ❌ 2,59 | `#56615A` sur blanc | ✅ 6,46 | 4,5 |
| Titre « Récemment » | `#6C7A6F` sur `#FAF6EE` | ❌ 4,19 | `#56615A` sur `#FAF6EE` | ✅ 5,99 | 4,5 |
| Titre « Balado » sur l'illustration | blanc sur ciel `#A9C6B3` | ❌ 1,84 | `#1B2A20` sur `#A9C6B3` | ✅ 8,16 | 3 |
| Texte principal | `#24352A` sur `#FAF6EE` | ✅ 12,04 | inchangé | ✅ 12,04 | 4,5 |
| Puce inactive | `#24352A` sur `#E4DDCD` | ✅ 9,60 | inchangé | ✅ 9,60 | 4,5 |
| Puce active / bouton | blanc sur `#2F5D43` | ✅ 7,59 | inchangé | ✅ 7,59 | 4,5 |
| Badge « BUS / TRAIN » | — | — | blanc sur `#24352A` | ✅ 12,98 | 4,5 |
| Message d'erreur | — | — | `#8A1C1C` sur blanc | ✅ 9,28 | 4,5 |
| Contour de focus clavier | — | — | `#B3541E` sur `#FAF6EE` | ✅ 4,63 | 3 |
| Bordure du champ de saisie | — | — | `#56615A` sur blanc | ✅ 6,46 | 3 |

**Bilan :** 7 couleurs sur 12 étaient en échec dans la proposition A. **Après correction, 100 % des textes de la maquette atteignent le niveau AA.** Une mesure automatique sur les 4 écrans ne trouve plus aucun échec.

### 1.2 Navigation complète au clavier (sans souris)

**Méthode :** le flow complet a été parcouru uniquement avec **Tab**, **Shift + Tab**, **Entrée** et **Espace**.

| # | Touche(s) | Où arrive le focus | Ce qui se passe | OK ? |
|---|---|---|---|:-:|
| 1 | Tab ×1 | Champ « Où veux-tu marcher ? » | Contour orange visible | ✅ |
| 2 | Entrée (champ vide) | Reste dans le champ | Message d'erreur « ⚠ Écris une ville ou un arrêt… » lu par le lecteur d'écran (`role="alert"`) | ✅ |
| 3 | Taper « Lausanne » + Entrée | Titre « Près de Lausanne » | Écran Résultats. Le focus est placé sur le titre du nouvel écran | ✅ |
| 4 | Tab ×2 + Entrée | Puce « Facile » | La liste est filtrée et la puce est marquée active (`aria-pressed="true"`) | ✅ |
| 5 | Tab ×3 + Entrée | Carte « Bois de Sauvabelin » | Écran Fiche. Focus sur le titre de la rando | ✅ |
| 6 | Tab ×1 + Entrée | Bouton « Ajouter aux favoris » | Le bouton devient « ♥ Dans tes favoris » et le message « ✓ Ajoutée à tes favoris » s'affiche | ✅ |
| 7 | Tab ×1 + Entrée | « Voir » dans le message | Écran Favoris avec la rando ajoutée | ✅ |
| 8 | Tab + Espace | Cœur « Retirer … des favoris » | Retrait. Le focus passe automatiquement sur « Annuler » | ✅ |
| 9 | Entrée | « Annuler » | La rando revient et le focus retourne sur son cœur | ✅ |
| 10 | Tab / Shift + Tab | Onglets « Explorer » / « Favoris » | Changement d'écran possible partout | ✅ |

- **Objectif atteint au clavier en 7 étapes** : de l'ouverture jusqu'à la rando enregistrée dans les favoris.
- **Focus visible** sur chaque élément interactif : contour orange de 3 px, décalé de 3 px (captures dans [`captures/`](captures/)).
- **Aucun piège à clavier** : on peut toujours avancer et revenir en arrière.
- Les boutons sans texte (←, ♡) ont un nom lisible par un lecteur d'écran (`aria-label`), par ex. « Ajouter Bois de Sauvabelin aux favoris ».

### 1.3 Cibles tactiles

| Élément | Taille | Minimum WCAG (24 px) | Standard du cours (48 px) |
|---|---|:-:|:-:|
| Boutons principaux | 318 × 52 px | ✅ | ✅ |
| Onglets du bas | 195 × 64 px | ✅ | ✅ |
| Cœur favori, bouton retour | 48 × 48 px | ✅ | ✅ |
| Puces (filtres, recherches récentes) | 73 à 98 × 48 px | ✅ | ✅ (corrigé, avant 44 px) |
| « Voir » / « Annuler » dans le message | ≥ 48 × 48 px | ✅ | ✅ (corrigé, avant 40 × 44 px) |

### 1.4 Corrections faites pendant l'audit
1. **7 couleurs de texte foncées** pour passer de 1,84–4,19:1 à 5,92–12,98:1 (voir le tableau 1.1).
2. **Le titre de l'écran d'accueil** était blanc sur un ciel clair (1,84:1) et en partie caché : il est maintenant foncé, en haut de l'image (8,16:1).
3. **Les puces et les liens du message** passent de 44 à **48 px** de haut.
4. **Le message de confirmation** reste 10 s au lieu de 6, et ne disparaît pas tant que le focus clavier est dessus (WCAG 2.2.1 « Délai suffisant »).
5. **Le focus n'est plus perdu** quand on retire un favori : il va sur « Annuler », puis revient sur le cœur.

---

## Partie 2 — Test utilisateur

### 2.1 Scénario (1 phrase, dite au testeur)

> **« Tu veux marcher samedi après-midi depuis Lausanne et tu n'as pas de voiture : trouve une balade facile et garde-la pour la retrouver plus tard. »**

Tâche réussie si le testeur arrive sur l'écran **Favoris** avec une balade **facile** enregistrée.

### 2.2 Protocole
1. Ouvrir `Design/maquette/index.html` sur l'ordinateur ou le téléphone, à l'écran d'accueil.
2. **Test 5 secondes :** montrer l'écran d'accueil 5 s, le cacher, puis demander « C'est une appli pour… ? »
3. Lire le scénario **une seule fois** et lancer un **chronomètre de 5 minutes**.
4. Demander au testeur de **penser à voix haute** (Think Aloud).
5. **Silence absolu** de l'observateur : ne pas toucher l'écran, ne pas pointer, ne rien expliquer. C'est l'interface qui est testée, pas la personne.
6. Noter les hésitations, les clics au mauvais endroit, les phrases dites et le temps total.

### 2.3 Fiche d'observation

> ✏️ **À remplir pendant le test avec ton camarade.**

**App testée :** Balado (maquette HTML)
**Testeur :** ______________________
**Observateur :** ______________________
**Date :** ______________________
**Tâche donnée :** trouver une balade facile depuis Lausanne et l'ajouter aux favoris

#### Test 5 secondes
« C'est une appli pour… » (phrase du testeur) : ______________________

Écart avec l'intention (« trouver une petite rando accessible en transports ») : ______________________

#### Test de localisation
Consigne dite : « Montre-moi où tu tapoterais pour **ajouter cette balade à tes favoris** » (sur l'écran Fiche).

Le doigt est allé au **bon** contrôle : oui / non / à côté
Hésitation : ______________________
Dit à voix haute : ______________________
J'ai aidé : oui / non

#### Déroulé de la tâche complète

| Étape attendue | Réussi ? | Hésitation observée (regard perdu, mauvais clic…) | Phrase dite à voix haute |
|---|:-:|---|---|
| 1. Écrire « Lausanne » et lancer la recherche | | | |
| 2. Filtrer sur « Facile » | | | |
| 3. Ouvrir une balade | | | |
| 4. L'ajouter aux favoris | | | |
| 5. Retrouver la balade dans Favoris | | | |

**Temps total :** ____ min ____ s (limite : 5 min)
**Tâche réussie :** oui / non / avec aide

**Remarques spontanées :**
- …
- …

---

## Partie 3 — Actions correctives

### 3.1 Issues de l'audit (déjà corrigées dans la maquette)
| Problème constaté | Correctif appliqué |
|---|---|
| 7 textes gris sous 4,5:1 | Gris foncé `#56615A` → 5,99 à 6,46:1 |
| Titre d'accueil blanc sur ciel clair (1,84:1) | Titre foncé `#1B2A20` → 8,16:1 |
| Puces et liens du message trop petits (44 px) | Hauteur minimale 48 px |
| Message de confirmation qui disparaît trop vite au clavier | 10 s, et reste affiché tant qu'il a le focus |

### 3.2 Issues du test utilisateur (2 correctifs prioritaires)

> ✏️ **À compléter après le test**, à partir des hésitations notées en 2.3. Format : *problème observé → correctif concret et chiffré*.

**Correctif 1**
- Problème observé : ______________________
- Avant : ______________________
- Après (prévu) : ______________________

**Correctif 2**
- Problème observé : ______________________
- Avant : ______________________
- Après (prévu) : ______________________

*Points à surveiller pendant le test, car ce sont des frictions possibles :* le testeur trouve-t-il le filtre « Facile » sans défiler ? Comprend-il que le cœur ♡ sur la carte ajoute directement aux favoris ? Remarque-t-il le message « ✓ Ajoutée à tes favoris » ?
