# Ayon Kumar Bhowmick Ovi | Portfolio

One-page portfolio built with **React, Vite and Tailwind CSS**. The page is pre-rendered to plain HTML at build time, so it appears immediately, even before JavaScript loads.

- **Live (Vercel):** https://ayon-bhowmick-portfolio.vercel.app
- **Mirror (GitHub Pages):** https://ayonbhowmick.github.io

## How to update
| What | Where |
|---|---|
| Any text: projects, papers, skills, education | `src/data/portfolio.js` |
| CV (the Download button) | replace `public/assets/Ayon_CV.pdf` |
| Profile photo | `public/img/profile.webp` (720×900) and `profile-480.webp` |
| Project screenshots | `public/img/projects/<name>.webp` (≤1600 px wide) plus `<name>-sm.webp` (800 px wide), then add them to that project's `shots` list |
| Colours | the variables at the top of `src/index.css` |
| Link preview image | `public/og.jpg` (1200×630) |

Then push:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel and GitHub Pages both rebuild automatically within a couple of minutes.

## Structure
```
index.html                ← page head: title, SEO tags, structured data
src/data/portfolio.js     ← ALL the content
src/components/           ← one file per section
src/entry-server.jsx      ← used at build time to pre-render the HTML
scripts/prerender.mjs     ← writes the rendered page into dist/index.html
public/                   ← images, CV, robots.txt, sitemap.xml, 404.html
vercel.json               ← caching and security headers for Vercel
.github/workflows/        ← GitHub Pages build
```

## Run locally
Needs [Node.js](https://nodejs.org) 18 or newer.
```bash
npm install
npm run dev      # development server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```
