# Ayon Kumar Bhowmick Ovi | Portfolio

My personal portfolio website: one page with dark and light themes, built with **HTML, Tailwind CSS and vanilla JavaScript**.

🔗 **Live site:** https://ayonbhowmick.github.io

---

## ✨ What's on the page
- **Hero:** intro, CV download and social links
- **About:** who I am and what I'm currently focused on
- **Skills:** programming, AI/ML, web & databases, testing, networking, tools
- **Projects:** filterable cards (Desktop / Web / Game) with screenshots and GitHub links
- **Research:** research areas and publications
- **Education:** timeline, certifications and activities
- **Contact:** email (with a copy button), LinkedIn and GitHub

## 🎨 Features
- Dark and light themes with a toggle that remembers your choice
- Fully responsive, from phones to desktops
- Sticky navbar that highlights the current section, plus a scroll progress bar
- Project filter buttons
- No build step needed: plain files served by GitHub Pages

---

## 🚀 Projects shown
| Project | Tech | Repository |
|---|---|---|
| University Management System | Java, Swing, File I/O | [View](https://github.com/AyonBhowmick/University_Management_System) |
| Cafe Shop Management System | C#, .NET, SQL Server | [View](https://github.com/AyonBhowmick/Cafe_Shop_Management_System) |
| SkillSwap Connect | PHP, MySQL, JavaScript | [View](https://github.com/AyonBhowmick/SkillSwap-Connect) |
| Virus Invaders | C++, OpenGL, GLUT | [View](https://github.com/AyonBhowmick/VIRUS_INVADERS) |

---

## 📂 Structure
```
index.html              ← the whole page (edit text here)
assets/css/tailwind.css ← compiled Tailwind (generated, don't edit)
assets/css/style.css    ← theme colours and custom styles
assets/js/main.js       ← theme toggle, menu, scroll spy, filter, copy email
assets/img/             ← profile.jpg, avatar.jpg, favicon.png, projects/*
assets/Ayon_CV.pdf      ← CV for the Download button
tailwind.config.js, src/input.css ← only needed to rebuild tailwind.css
```

## ✏️ How to update
- **Text, projects, papers:** edit `index.html`. Each section is marked with a comment like `<!-- ===== PROJECTS ===== -->`.
- **Colours:** edit the variables at the top of `assets/css/style.css`.
- **CV:** replace `assets/Ayon_CV.pdf`.
- **Project images:**
  - University Management System and SkillSwap load directly from their own repos' `SS` folders.
  - Cafe Shop and Virus Invaders use files in `assets/img/projects/`.
  - If an image is missing, the card shows a placeholder.

After any change:
```bash
git add .
git commit -m "Update portfolio"
git push
```
The live site updates in 1–2 minutes.

If you add **new Tailwind classes** that weren't used before, rebuild the CSS once:
```bash
npx tailwindcss@3 -c tailwind.config.js -i src/input.css -o assets/css/tailwind.css --minify
```

---

## 📫 Contact
- Email: ayon312002@gmail.com
- LinkedIn: [linkedin.com/in/ayon-bhowmick](https://www.linkedin.com/in/ayon-bhowmick/)
- GitHub: [github.com/AyonBhowmick](https://github.com/AyonBhowmick)
