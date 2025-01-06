# 🌱 Calendrier des Fruits et Légumes de Madagascar

Une application web moderne pour découvrir les fruits et légumes de saison à Madagascar, région par région.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Fonctionnalités

- 📅 Calendrier interactif des fruits et légumes par mois
- 🗺️ Carte interactive des régions de Madagascar
- 🔍 Filtres multiples :
  - Par saison
  - Par type (fruits/légumes)
  - Par région
- 📱 Interface responsive
- 🎨 Design moderne avec Tailwind CSS

## 🚀 Technologies Utilisées

- **React** - Framework frontend
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icônes

## 🛠️ Installation

```bash
# Cloner le repository
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📁 Structure du Projet

```
src/
├── components/         # Composants React
│   ├── Calendar.tsx   # Calendrier des produits
│   ├── Filters.tsx    # Filtres de recherche
│   └── MadagascarMap.tsx  # Carte interactive
├── data/              # Données statiques
│   ├── produce.ts     # Données des fruits et légumes
│   └── regions.ts     # Données des régions
└── App.tsx            # Composant principal
```

## 🎯 Composants Principaux

### Calendar
Affiche un calendrier annuel avec les fruits et légumes disponibles pour chaque mois. Les mois sont mis en surbrillance en fonction de la saison sélectionnée.

### MadagascarMap
Carte interactive de Madagascar permettant de sélectionner une région pour filtrer les produits disponibles.

### Filters
Système de filtrage permettant de combiner différents critères :
- Saisons (Printemps, Été, Automne, Hiver)
- Types (Fruits, Légumes)
- Régions (via la carte)

## 🔄 Gestion de l'État

L'application utilise React Hooks pour gérer l'état :
- `selectedSeason` : Saison actuellement sélectionnée
- `selectedType` : Type de produit sélectionné
- `selectedRegion` : Région sélectionnée sur la carte

## 📱 Responsive Design

L'interface s'adapte automatiquement aux différentes tailles d'écran :
- Layout en colonnes sur mobile
- Layout en grille sur desktop
- Composants redimensionnables

## 🛣️ Roadmap

- [ ] Ajouter plus de données de fruits et légumes
- [ ] Intégrer une base de données
- [ ] Ajouter des images pour chaque produit
- [ ] Implémenter une recherche par nom
- [ ] Ajouter des informations nutritionnelles

## 📄 License

MIT License - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.
