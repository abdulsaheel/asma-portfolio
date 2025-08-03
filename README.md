# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# My React Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, artistic design with geometric elements
- 🐱 Interactive walking cat mascot
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 Clean, professional layout

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. 

To deploy:
1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://yourusername.github.io/my-react-app/`

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- GitHub Pages

## Project Structure

```
src/
├── components/          # React components
│   ├── ArtisticHero.tsx
│   ├── MinimalAbout.tsx
│   ├── GeometricSkills.tsx
│   ├── MinimalProjects.tsx
│   ├── ArtisticContact.tsx
│   └── WalkingMascot.tsx
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# asma-portfolio
