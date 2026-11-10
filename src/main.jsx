import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { inject } from '@vercel/analytics';
import App from './App.jsx';
import './index.css';

// The HTML is pre-rendered at build time, so React only attaches event handlers here.
const root = document.getElementById('root');
const app = <StrictMode><App /></StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

// Vercel Web Analytics (free on the Hobby plan, no cookies). Only runs on the live
// Vercel address, so GitHub Pages and local testing don't load it.
if (location.hostname === 'ayon-bhowmick-portfolio.vercel.app') inject();
