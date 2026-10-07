# Ayon Kumar Bhowmick Ovi | Portfolio

My personal portfolio: one page with dark and light themes, built with **React, Vite and Tailwind CSS**.

🔗 **Live site:** https://ayonbhowmick.github.io

## What's on the page
- **Hero:** intro, CV download and social links
- **About:** career goal and what I'm currently focused on
- **Skills:** programming, AI/ML, web & databases, testing, networking, tools
- **Projects:** filterable cards (Desktop / Web / Game) with screenshot sliders and a full-screen viewer
- **Research:** research areas and publications
- **Education:** timeline, certifications and activities
- **Contact:** email (with a copy button), LinkedIn and GitHub

## Structure
```
index.html                 ← page shell (title, fonts)
src/data/portfolio.js      ← ALL the text and links (edit this to update the site)
src/components/            ← one file per section (Navbar, Hero, Projects, ...)
src/hooks/                 ← theme toggle and scroll tracking
src/index.css              ← colours and custom styles
public/SS/                 ← project screenshots
public/assets/img/         ← profile photo, avatar, favicon
public/assets/Ayon_CV.pdf  ← CV for the Download button
.github/workflows/deploy.yml ← builds and publishes the site on every push
```

## How to update
- **Text, projects, papers, skills:** edit `src/data/portfolio.js`.
- **Colours:** edit the variables at the top of `src/index.css`.
- **CV:** replace `public/assets/Ayon_CV.pdf`.
- **Screenshots:** put the image in `public/SS/<project folder>/` and add it to that project's `shots` list in `src/data/portfolio.js`.

Then push:
```bash
git add .
git commit -m "Update portfolio"
git push
```
GitHub builds and publishes the site automatically in about 1–2 minutes (see the **Actions** tab).

## Run it on your own computer (optional)
Needs [Node.js](https://nodejs.org) 18 or newer.
```bash
npm install
npm run dev
```
Then open the address it prints (usually http://localhost:5173).

## Contact
- Email: ayon312002@gmail.com
- LinkedIn: [linkedin.com/in/ayon-bhowmick](https://www.linkedin.com/in/ayon-bhowmick/)
- GitHub: [github.com/AyonBhowmick](https://github.com/AyonBhowmick)
