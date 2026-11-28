// =====================================================================
// ALL the text on the site lives in this file.
// Edit the values below, save, commit and push. Vercel and GitHub Pages
// rebuild the site automatically.
// =====================================================================

export const site = {
  url: 'https://ayon-bhowmick-portfolio.vercel.app/',
};

export const profile = {
  name: 'Ayon Kumar Bhowmick Ovi',
  shortName: 'Ayon Bhowmick',
  initials: 'AB',
  status: 'Open to internships & entry-level roles',
  nameMain: 'Ayon Kumar Bhowmick', // shown in white
  nameAccent: 'Ovi', // shown with the violet-pink gradient
  role: ['Software development', 'Explainable ML'],
  lead:
    'I build software (desktop apps, web platforms and databases) and do machine-learning research focused on explainable models for health, energy and finance.',
  email: 'ayon312002@gmail.com',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/AyonBhowmick',
  githubLabel: 'github.com/AyonBhowmick',
  linkedin: 'https://www.linkedin.com/in/ayon-bhowmick/',
  linkedinLabel: 'linkedin.com/in/ayon-bhowmick',
  cv: '/assets/Ayon_CV.pdf',
  // the small code card on the photo
  codeCard: [
    ['focus', '"AI/ML · Software"'],
    ['papers', '3'],
    ['openTo', '"Internships"'],
  ],
};

// The four numbers shown under the hero.
export const facts = [
  { value: '3.71', label: 'CGPA at AIUB', note: 'out of 4.00' },
  { value: '3', label: 'Conference papers', note: '1 published · 2 accepted' },
  { value: 'IEEE', label: 'Student Member', note: 'AIUB Student Branch · 2026 – Present' },
  { value: '9', label: 'Projects', note: 'software · data science · deep learning' },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm studying for a B.Sc in Computer Science and Engineering at American International University-Bangladesh (AIUB), where I've been since January 2023.",
    'I want to start my career in a challenging role where I can apply software development, machine learning and data analysis to real problems, working alongside experienced engineers and learning modern tools and industry practice.',
    'Long term, I want to become a skilled and dependable engineer who contributes to useful, high-quality products.',
  ],
  now: [
    'Two papers under review at ECCE 2027: electricity demand forecasting and software defect prediction',
    'Looking for an internship or entry-level role in software, ML, data or QA',
    'Student Member, IEEE AIUB Student Branch',
  ],
};

export const researchInterests = [
  'Machine Learning', 'Deep Learning', 'Explainable AI', 'Data Analytics', 'Natural Language Processing',
  'Computer Vision', 'Data Mining', 'Business Intelligence', 'Data Science',
];

// "me" is your name exactly as it appears in the author list (shown in bold).
// status: 'published' shows a DOI link; 'accepted' shows a badge only.
export const publications = [
  {
    status: 'published',
    badge: 'Published · IEEE',
    title:
      'Daily Peak Demand Forecasting in Bangladesh: A Leakage-Aware Comparison of Machine Learning, Deep Learning, and a Hybrid RF–Naive Model',
    authors: ['D. P. Karmakar', 'A. K. B. Ovi', 'T. B. Jenny', 'M. M. Hasan'],
    me: 'A. K. B. Ovi',
    venue:
      '2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)',
    place: 'Pabna, Bangladesh, 2026, pp. 1–6',
    doi: '10.1109/PECCII70991.2026.11661966',
  },
  {
    status: 'accepted',
    badge: 'Accepted · Oral presentation',
    title:
      'An Explainable Stacking Ensemble Framework with SMOTE for Loan Approval Prediction: A CIBIL-Centric Interpretability Analysis',
    authors: ['A. K. B. Ovi', 'S. K. B. Shanto', 'B. K. Bhawmick'],
    me: 'A. K. B. Ovi',
    venue: '2026 IEEE 8th International Conference on Sustainable Technologies for Industry 5.0 (STI)',
    place: 'Dhaka, Bangladesh, 2026 (to appear)',
  },
  {
    status: 'accepted',
    badge: 'Accepted · ICREST 2027',
    title:
      'Explainable Machine Learning for Early Dengue Detection Using Routine Blood Parameters: A CTGAN-Balanced Stacking Framework',
    authors: ['A. K. B. Ovi', 'S. K. B. Shanto', 'B. K. Bhawmick', 'D. J. Gomes'],
    me: 'A. K. B. Ovi',
    venue: '5th International Conference on Robotics, Electrical and Signal Processing Techniques (ICREST)',
    place: 'Dhaka, Bangladesh, 2027 (to appear)',
  },
];

// Papers submitted and waiting for a decision. Leave the list empty to hide the section.
export const underReview = [
  {
    title: 'Regime-Aware Hybrid Deep Learning for Hourly Electricity Demand Forecasting in Bangladesh',
    authors: ['A. K. B. Ovi', 'S. K. B. Shanto', 'B. K. Bhawmick'],
    venue: 'Submitted to ECCE 2027 (International Conference on Electrical, Computer and Communication Engineering)',
  },
  {
    title: 'Software Defect Prediction Using Static Code Metrics: A Pair-Aware and Explainable Machine Learning Approach',
    authors: ['A. K. B. Ovi', 'H. Saha', 'T. Rahaman', 'M. S. Jahan', 'S. J. Liza', 'M. A. A. Mahmud'],
    venue: 'Submitted to ECCE 2027 (International Conference on Electrical, Computer and Communication Engineering)',
  },
];

// Manuscripts still being written. Leave the list empty to hide the section.
export const inPreparation = [];

// Screenshots live in public/img/projects/. Each one has a full-size file
// (name.webp) and a small one for the card (name-sm.webp).
// "contain: true" shows the whole image instead of cropping it.
// "schema" draws a small diagram of the tables when there are no screenshots.
export const projects = [
  {
    title: 'SkillSwap Connect',
    slug: 'skillswap-connect', // page address: /projects/skillswap-connect/
    kind: 'Web platform',
    tech: ['PHP', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    description:
      'A web platform that connects learners and mentors for skill exchange and paid courses, with separate roles for Learners, Mentors and Admins.',
    highlights: ['Course requests and messaging', 'Progress tracking', 'Certificate generation'],
    repo: 'https://github.com/AyonBhowmick/SkillSwap-Connect',
    demo: 'https://skillswap-connect-five.vercel.app', // live demo (optional field)
    shots: [
      { src: 'skillswap-1', alt: 'Home page', w: 800, h: 448 },
      { src: 'skillswap-2', alt: 'Browse and request skills', w: 800, h: 454 },
      { src: 'skillswap-3', alt: 'Learner dashboard', w: 800, h: 363 },
      { src: 'skillswap-4', alt: 'Chat with a mentor', w: 800, h: 505 },
      { src: 'skillswap-5', alt: 'Admin dashboard', w: 800, h: 453 },
      { src: 'skillswap-6', alt: 'User management', w: 800, h: 455 },
      { src: 'skillswap-7', alt: 'Skill swap requests', w: 800, h: 454 },
    ],
  },
  {
    title: 'MotoHub E-Commerce Platform',
    slug: 'motohub-ecommerce', // page address: /projects/motohub-ecommerce/
    kind: 'Full-stack web (team)',
    tech: ['Next.js', 'TypeScript', 'Supabase'],
    description:
      'A full-stack motorcycle parts store for Bangladesh with fitment search, checkout, bike-wash booking and an admin panel. I collaborated on the build and wrote the product requirements and technical documentation.',
    highlights: ['Product Requirements Document with 80+ requirements', 'Fitment search: parts filtered by your bike', 'Checkout and bike-wash booking flows'],
    demo: 'https://motovault-phi.vercel.app', // live site (no public repo)
    shots: [
      { src: 'motohub-1', alt: 'Home page with fitment search', w: 800, h: 500 },
      { src: 'motohub-2', alt: 'Shop with filters', w: 800, h: 500 },
      { src: 'motohub-3', alt: 'Product page', w: 800, h: 500 },
      { src: 'motohub-4', alt: 'Bike-wash booking', w: 800, h: 500 },
    ],
  },
  {
    title: 'Hockey Win Percentage Prediction',
    slug: 'hockey-win-percentage-prediction', // page address: /projects/hockey-win-percentage-prediction/
    kind: 'Data science',
    tech: ['R', 'rvest', 'ggplot2', 'caret', 'Random Forest'],
    description:
      'Scraped 582 hockey team-season records (1990–2011) from the web and predicted each team\'s win percentage with regression models in R.',
    highlights: ['Web scraping with rvest across 6 pages', 'Correlation, outlier and distribution analysis', 'Random Forest R² = 0.984 vs Linear Regression 0.969'],
    repo: 'https://github.com/AyonBhowmick/Hockey_Win_Percentage_Prediction',
    shots: [
      { src: 'hockey-1', alt: 'Random Forest: actual vs predicted', w: 800, h: 500 },
      { src: 'hockey-2', alt: 'Correlation heatmap', w: 800, h: 689, contain: true },
      { src: 'hockey-3', alt: 'Goal difference vs win percentage', w: 800, h: 500 },
      { src: 'hockey-4', alt: 'Random Forest feature importance', w: 800, h: 622, contain: true },
      { src: 'hockey-5', alt: 'R² comparison of the two models', w: 800, h: 500 },
    ],
  },
  {
    title: 'Rice Seed Classification with CNNs',
    slug: 'rice-seed-cnn', // page address: /projects/rice-seed-cnn/
    kind: 'Deep learning',
    tech: ['Python', 'PyTorch', 'CNN'],
    description:
      'Two CNNs trained from scratch in PyTorch to classify 8 Bangladeshi rice seed varieties (BD RiceSeed dataset), comparing a baseline with a regularised model.',
    highlights: ['Data augmentation and dropout against overfitting', 'Test accuracy 85.21% → 88.54% with regularisation', 'Per-class F1 up to 0.99'],
    repo: 'https://github.com/AyonBhowmick/CNN-ASSIGNMENT',
    shots: [
      { src: 'cnn-2', alt: 'Accuracy and loss curves', w: 800, h: 529, contain: true },
      { src: 'cnn-1', alt: 'Training images with and without augmentation', w: 800, h: 308, contain: true },
      { src: 'cnn-3', alt: 'Confusion matrices of both models', w: 800, h: 332, contain: true },
    ],
  },
  {
    title: 'Loan Approval Data Analysis',
    slug: 'loan-approval-data-analysis', // page address: /projects/loan-approval-data-analysis/
    kind: 'Data analysis',
    tech: ['R', 'tidyverse', 'ggplot2', 'caret'],
    description:
      'Messy loan data made approval decisions hard to analyse. I built an R pipeline that cleans, transforms and balances 4,269 applications without data leakage, then used statistics and charts to find what drives approval.',
    highlights: ['Missing values, duplicates, outliers and class imbalance handled', 'CIBIL score is the strongest factor (median 710 vs 430)', 'Income and education barely change approval'],
    repo: 'https://github.com/AyonBhowmick/Loan_Approval_Data_Analysis',
    shots: [
      { src: 'loan-1', alt: 'Income vs loan amount', w: 800, h: 466 },
      { src: 'loan-2', alt: 'CIBIL score by loan status', w: 506, h: 547, contain: true },
      { src: 'loan-3', alt: 'Data preparation workflow', w: 800, h: 113, contain: true },
      { src: 'loan-4', alt: 'Approved vs rejected applications', w: 506, h: 547, contain: true },
      { src: 'loan-5', alt: 'Income density', w: 800, h: 466 },
    ],
  },
  {
    title: 'Café Shop Management System',
    slug: 'cafe-shop-management-system', // page address: /projects/cafe-shop-management-system/
    kind: 'Desktop app',
    tech: ['C#', '.NET', 'SQL Server'],
    description:
      'Handles daily café operations and customer orders, with role-based access for Admin and Cashier users.',
    highlights: ['Products, staff accounts and payments', 'Receipts and sales records', 'Admin dashboard with income totals'],
    repo: 'https://github.com/AyonBhowmick/Cafe_Shop_Management_System',
    shots: [
      { src: 'cafe-1', alt: 'Admin dashboard', w: 800, h: 459 },
      { src: 'cafe-2', alt: 'Welcome screen', w: 800, h: 520, contain: true },
      { src: 'cafe-3', alt: 'Sign-in screen', w: 800, h: 548, contain: true },
      { src: 'cafe-4', alt: 'Register screen', w: 800, h: 604, contain: true },
    ],
  },
  {
    title: 'Fund Raiser Management System',
    slug: 'fund-raiser-management-system', // page address: /projects/fund-raiser-management-system/
    kind: 'Database design',
    tech: ['Oracle SQL'],
    description:
      'A central relational database that replaces scattered donor spreadsheets, which caused duplicate records and slow reporting.',
    highlights: ['Schema normalised to 3NF', 'Joins, subqueries and views', 'Reports on total donations and top donors'],
    repo: 'https://github.com/AyonBhowmick/Fund_Raiser_Management_System',
    schema: ['Events', 'Donors', 'Donations', 'Organizations', 'Teams'],
    shots: [],
  },
  {
    title: 'University Management System',
    slug: 'university-management-system', // page address: /projects/university-management-system/
    kind: 'Desktop app',
    tech: ['Java', 'Swing', 'File I/O'],
    description:
      'A desktop system for student, faculty and administrative records, with role-based login and file-based storage.',
    highlights: ['Role-based login and sign-up', 'Tuition and scholarship fees', 'Persistent storage with File I/O'],
    repo: 'https://github.com/AyonBhowmick/University_Management_System',
    shots: [
      { src: 'ums-1', alt: 'Main screen', w: 800, h: 444 },
      { src: 'ums-2', alt: 'Login screen', w: 592, h: 312, contain: true },
      { src: 'ums-3', alt: 'Welcome screen', w: 715, h: 616, contain: true },
    ],
  },
  {
    title: 'Virus Invaders',
    slug: 'virus-invaders', // page address: /projects/virus-invaders/
    kind: 'Game',
    tech: ['C++', 'OpenGL', 'GLUT'],
    description:
      'A 2D game where the player fights viruses and collects vaccines across five levels with changing weather.',
    highlights: ['Collision detection', 'Health and score tracking', 'Five progressive levels'],
    repo: 'https://github.com/AyonBhowmick/VIRUS_INVADERS',
    video: 'https://www.youtube.com/watch?v=ndcEep8XbRQ', // gameplay video (optional field)
    shots: [
      { src: 'virus-1', alt: 'Level 1, sunny', w: 456, h: 450, contain: true },
      { src: 'virus-2', alt: 'Level 2, night', w: 413, h: 409, contain: true },
      { src: 'virus-3', alt: 'Level 3, winter', w: 389, h: 385, contain: true },
      { src: 'virus-4', alt: 'Level 4, rain', w: 435, h: 433, contain: true },
    ],
  },
];

// icon: one of code, ai, database, flask, network, tool (see components/Icon.jsx)
export const skills = [
  { title: 'Programming', icon: 'code', items: ['Python', 'R', 'C++', 'C#', 'Java', 'JavaScript', 'PHP'] },
  { title: 'AI/ML & Data', icon: 'ai', items: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Data Cleaning', 'EDA', 'Data Visualization', 'SHAP', 'Grad-CAM'] },
  { title: 'Web & Software', icon: 'code', items: ['HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', '.NET', 'Windows Forms', 'Java Swing'] },
  { title: 'Databases', icon: 'database', items: ['SQL', 'MySQL', 'MongoDB', 'Microsoft SQL Server', 'Oracle SQL', 'Supabase'] },
  { title: 'Testing & QA', icon: 'flask', items: ['Manual testing', 'REST API testing (Postman)', 'Test case design', 'Selenium', 'SQA'] },
  { title: 'Tools & DevOps', icon: 'tool', items: ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'VS Code', 'RStudio', 'Jupyter', 'Google Colab', 'Windows', 'Linux'] },
];

export const education = [
  {
    period: 'Jan 2023 – Present',
    degree: 'B.Sc in Computer Science and Engineering',
    school: 'American International University-Bangladesh (AIUB)',
    result: 'CGPA 3.71 / 4.00',
  },
  {
    period: '2019 – 2021',
    degree: 'Higher Secondary Certificate',
    school: 'Dhaka Imperial College',
    result: 'GPA 5.00 / 5.00',
  },
  {
    period: '2017 – 2019',
    degree: 'Secondary School Certificate',
    school: 'National Ideal School',
    result: 'GPA 4.78 / 5.00',
  },
];

export const achievements = [
  { title: 'Cisco Networking Academy', note: 'Completed networking training and certification' },
  { title: 'IEEE SPAVe 7.0', note: 'Student Professional Awareness Venture, IEEE AIUB Student Branch' },
  { title: 'Student Member, IEEE AIUB Student Branch', note: '2026 – Present' },
];

export const contact = {
  heading: "Let's talk",
  text:
    "I'm looking for internships and entry-level roles in software engineering, machine learning, data science, QA or research. Email is the fastest way to reach me.",
  references: 'References available on request.',
};
