# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## MediaSearch

A media search application built with React and Vite that allows users to search for media content and organize collections.

### Features

- **Search Media**: Search for movies, shows, and other media content
- **Collections**: Create and manage collections of your favorite media
- **Responsive UI**: Built with modern React components and styling
- **Fast Development**: Powered by Vite with HMR support

### Project Structure

```
src/
├── api/          # API integration (mediaApi.js)
├── components/   # Reusable UI components
├── pages/        # Page components (HomePage, CollectionPage)
├── redux/        # State management with Redux
└── main.jsx      # Application entry point
```

### Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`

### Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **Redux** - State management
- **ESLint** - Code quality

### Environment Variables

Configure your `.env` file with required API credentials and endpoints.