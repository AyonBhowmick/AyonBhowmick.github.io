# Ayon Kumar Bhowmick Ovi | Portfolio

Portfolio built with **Next.js 15 (App Router), React 19 and Tailwind CSS**. It is exported as static HTML (`output: 'export'`), so every page appears immediately and works on both Vercel and GitHub Pages.

Pages: the home page plus one page per project at `/projects/<slug>/`.

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
src/app/layout.jsx            ← shared layout: SEO tags, theme, header, footer
src/app/page.jsx              ← home page (all sections)
src/app/projects/[slug]/      ← one page per project (built for every project in the data file)
src/app/sitemap.js            ← sitemap.xml for Google
src/data/portfolio.js         ← ALL the content
src/components/               ← one file per section
public/                       ← images, CV, robots.txt
next.config.mjs               ← static export settings
vercel.json                   ← caching and security headers for Vercel
.github/workflows/            ← GitHub Pages build (publishes out/)
```

## Run locally
Needs [Node.js](https://nodejs.org) 18 or newer.
```bash
npm install
npm run dev      # development server at http://localhost:3000
npm run build    # static site in out/
```
