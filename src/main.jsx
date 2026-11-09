import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// The HTML is pre-rendered at build time, so React only attaches event handlers here.
const root = document.getElementById('root');
const app = <StrictMode><App /></StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
