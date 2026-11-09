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
  role: 'CSE undergraduate · Software & explainable ML',
  lead:
    'I build software (desktop apps, web platforms and databases) and do machine-learning research focused on explainable models for health, energy and finance.',
  email: 'ayon312002@gmail.com',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/AyonBhowmick',
  githubLabel: 'github.com/AyonBhowmick',
  linkedin: 'https://www.linkedin.com/in/ayon-bhowmick/',
  linkedinLabel: 'linkedin.com/in/ayon-bhowmick',
  cv: '/assets/Ayon_CV.pdf',
};

// The four numbers shown under the hero.
export const facts = [
  { value: '3.71', label: 'CGPA at AIUB', note: 'out of 4.00' },
  { value: '2', label: 'IEEE conference papers', note: '1 published · 1 accepted' },
  { value: '3', label: 'Papers under review', note: 'ICCIT 2026 · ICREST 2027' },
  { value: '5', label: 'Software projects', note: 'desktop · web · game · database' },
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
    'Writing papers on explainable ML: diabetes, dengue, plant disease and software defects',
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
];

export const underReview = [
  {
    title: 'Leakage-Aware Diabetes Prediction Using Mutual Information and Explainable Machine Learning',
    authors: ['A. K. B. Ovi', 'B. K. Bhawmick'],
    venue: 'Submitted to ICCIT 2026 (29th International Conference on Computer and Information Technology)',
  },
  {
    title: 'Chilli Leaf Disease Classification Using a ConvNeXt-Mamba Hybrid with Explainable AI',
    authors: ['A. K. B. Ovi', 'T. B. Jenny', 'T. Ahmed', 'R. Mahmud', 'S. A. Tasnim'],
    venue: 'Submitted to ICCIT 2026 (29th International Conference on Computer and Information Technology)',
  },
  {
    title:
      'Explainable Machine Learning for Early Dengue Detection Using Routine Blood Parameters: A CTGAN-Balanced Stacking Framework',
    authors: ['A. K. B. Ovi', 'S. K. B. Shanto', 'B. K. Bhawmick', 'D. J. Gomes'],
    venue: 'Submitted to ICREST 2027 (5th International Conference on Robotics, Electrical and Signal Processing Techniques)',
  },
];

export const inPreparation = [
  {
    title: 'Software Defect Prediction Using Static Code Metrics: A Pair-Aware and Explainable Machine Learning Approach',
    authors: ['A. K. B. Ovi', 'H. Saha', 'T. Rahaman', 'M. S. Jahan', 'S. J. Liza', 'M. A. A. Mahmud'],
    venue: 'Manuscript in preparation',
  },
];

// Screenshots live in public/img/projects/. Each one has a full-size file
// (name.webp) and a small one for the card (name-sm.webp).
// "contain: true" shows the whole image instead of cropping it.
// "schema" draws a small diagram of the tables when there are no screenshots.
export const projects = [
  {
    title: 'SkillSwap Connect',
    kind: 'Web platform',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    description:
      'A web platform that connects learners and mentors for skill exchange and paid courses, with separate roles for Learners, Mentors and Admins.',
    highlights: ['Course requests and messaging', 'Progress tracking', 'Certificate generation'],
    repo: 'https://github.com/AyonBhowmick/SkillSwap-Connect',
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
    title: 'Café Shop Management System',
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
    kind: 'Game',
    tech: ['C++', 'OpenGL', 'GLUT'],
    description:
      'A 2D game where the player fights viruses and collects vaccines across five levels with changing weather.',
    highlights: ['Collision detection', 'Health and score tracking', 'Five progressive levels'],
    repo: 'https://github.com/AyonBhowmick/VIRUS_INVADERS',
    shots: [
      { src: 'virus-1', alt: 'Level 1, sunny', w: 456, h: 450, contain: true },
      { src: 'virus-2', alt: 'Level 2, night', w: 413, h: 409, contain: true },
      { src: 'virus-3', alt: 'Level 3, winter', w: 389, h: 385, contain: true },
      { src: 'virus-4', alt: 'Level 4, rain', w: 435, h: 433, contain: true },
    ],
  },
];

export const skills = [
  { title: 'Programming', items: ['Python', 'C++', 'C#', 'Java', 'JavaScript', 'PHP'] },
  { title: 'AI / ML', items: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SHAP', 'Grad-CAM'] },
  { title: 'Web & software', items: ['HTML', 'CSS', '.NET', 'Windows Forms'] },
  { title: 'Databases', items: ['MySQL', 'SQL', 'Microsoft SQL Server', 'Oracle SQL'] },
  { title: 'Testing & QA', items: ['Manual testing', 'API testing (Postman)', 'Test case design', 'Selenium', 'SQA'] },
  { title: 'Networking', items: ['TCP/IP', 'OSI', 'Subnetting', 'VLANs', 'OSPF', 'Packet Tracer'] },
  { title: 'Tools & OS', items: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Windows', 'Linux'] },
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
