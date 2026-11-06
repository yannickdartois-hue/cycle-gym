# Cycle Gymnastique · CA3 · Première · Lycée Georges Pompidou

Cycle de gymnastique de 8 séances de 110 min, 6 groupes, 6 ateliers (roulade avant → salto, roulade arrière → salto, ATR → saut de mains, roue → rondade, saut à la table, trampoline), niveaux A à F identiques à l'appli élève et à la fiche CA3. Un échauffement différent à chaque séance. Validation E par un camarade, P par le professeur, dans l'appli élève.

## Contenu du dépôt
| Fichier | Rôle |
|---|---|
| `index.html` | l'écran de cours (fabriqué par `mon-eps/atelier/ecran-de-cours/construire.py gym` : ne pas modifier à la main) |
| `outils.html` | l'outil complet (bouton « Préparer ») : les 8 séances détaillées et imprimables, ateliers et niveaux, installation et rotation, échauffements, règles, parade, validation, sources |
| `gym-donnees.js` | séances, échauffements, ateliers, sécurité, parade, validation et schémas, partagés par les deux pages |
| `img/pictos/` | les pictogrammes des niveaux, repris de l'appli élève |
| `sw.js`, `manifest.webmanifest`, `icon-*.png`, `polices/` | hors ligne et installation |

## Installation
1. Créer le dépôt `cycle-gym` (vide), y déposer tout le contenu, puis *Settings → Pages → Deploy from a branch → main / (root)*.
2. iPad : ouvrir l'adresse en Wi-Fi, puis **Ajouter à l'écran d'accueil**.

## Liens
Appli élève : https://yannickdartois-hue.github.io/gym-eleves/ · Outil prof : https://yannickdartois-hue.github.io/gym-prof/
