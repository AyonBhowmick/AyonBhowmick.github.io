# Ayon Kumar Bhowmick Ovi | Portfolio

Personal one-page portfolio built with **HTML, Tailwind CSS and vanilla JavaScript**, with dark and light themes.

Live: https://ayonbhowmick.github.io

## Structure
```
index.html              ← the whole page (edit text here)
assets/css/tailwind.css ← compiled Tailwind (generated, don't edit)
assets/css/style.css    ← theme colours and custom styles
assets/js/main.js       ← theme toggle, menu, scroll spy, filter, copy email
assets/img/             ← profile.jpg, avatar.jpg, favicon.png, projects/*
assets/Ayon_CV.pdf      ← CV for the Download button (add this)
tailwind.config.js, src/input.css ← only needed to rebuild tailwind.css
```

## Editing
- Text, projects and papers: edit `index.html` (each section is marked with a comment).
- Colours: edit the variables at the top of `assets/css/style.css`.
- Project screenshots: put them in `assets/img/projects/` as
  `university-management.jpg`, `cafe-shop.jpg`, `skillswap.jpg`, `virus-invaders.jpg`.
  A missing image shows a neat placeholder automatically.

If you add **new Tailwind classes** that weren't used before, rebuild the CSS once:
```bash
npx tailwindcss@3 -c tailwind.config.js -i src/input.css -o assets/css/tailwind.css --minify
```

## Deploy (GitHub Pages)
1. Create a public repo named `AyonBhowmick.github.io`.
2. Push these files to the `main` branch.
3. Settings → Pages → Source: **Deploy from a branch** → `main` / `root`.
