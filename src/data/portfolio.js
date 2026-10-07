// =====================================================================
// ALL the text on the site lives in this file.
// To update the portfolio, edit the values below, save, and push.
// =====================================================================

export const profile = {
  name: 'Ayon Kumar Bhowmick Ovi',
  shortName: 'Ayon Bhowmick',
  nameLines: ['Ayon Kumar', 'Bhowmick'], // first two lines of the big hero name
  nameAccent: 'Ovi', // last word, shown with the gradient
  status: 'Open to internships & entry-level roles',
  typedPrefix: 'I work on',
  typedWords: ['AI/ML Research', 'Software Development', 'Deep Learning for Healthcare', 'Explainable AI'],
  tagline: 'B.Sc in CSE, AIUB · AI/ML · Software Development · Research',
  summary:
    'I build practical software and apply machine learning to real-world problems, especially in healthcare and forecasting. Currently studying Computer Science and Engineering at AIUB.',
  email: 'ayon312002@gmail.com',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/AyonBhowmick',
  githubLabel: 'github.com/AyonBhowmick',
  linkedin: 'https://www.linkedin.com/in/ayon-bhowmick/',
  linkedinLabel: 'linkedin.com/in/ayon-bhowmick',
  cv: 'assets/Ayon_CV.pdf',
  photo: 'assets/img/profile.jpg',
  avatar: 'assets/img/avatar.jpg',
  codeCard: [
    ['focus', 'AI/ML · Software'],
    ['studying', 'CSE @ AIUB'],
    ['openTo', 'Internships'],
  ],
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

// value: number → animated count-up. text: shown as-is.
export const stats = [
  { label: 'CGPA', value: 3.71, decimals: 2, suffix: ' / 4.00' },
  { label: 'Projects', value: 4, decimals: 0, suffix: ' built' },
  { label: 'Publications', value: 1, decimals: 0, suffix: ' paper' },
  { label: 'IEEE AIUB', text: 'Student Member' },
];

export const marquee = [
  'Python', 'PyTorch', 'Scikit-learn', 'C++', 'C#', 'Java', 'JavaScript', 'PHP', 'MySQL',
  'SQL Server', '.NET', 'HTML & CSS', 'Selenium', 'Git & GitHub', 'Explainable AI', 'Deep Learning',
];

export const about = {
  heading: 'Career goal',
  paragraphs: [
    "I'm a B.Sc in Computer Science and Engineering student at American International University-Bangladesh (AIUB), graduating in October 2026.",
    'My goal is to begin my career in a challenging role where I can apply my knowledge of software development, machine learning and data analysis to solve real-world problems. I want to work with experienced professionals, learn modern tools and industry practices, and take on responsibilities that strengthen my technical and problem-solving skills.',
    'In the long term, I want to grow into a skilled and dependable engineer who contributes to useful, high-quality products.',
  ],
  focus: [
    'Research in machine learning, deep learning, NLP and data mining',
    'Looking for an internship to apply my skills and learn from experienced professionals',
    'Completing my B.Sc in CSE at AIUB (October 2026)',
  ],
};

// icon: one of code, ai, database, flask, network, tool (see components/Icon.jsx)
export const skills = [
  { title: 'Programming', icon: 'code', items: ['Python', 'C++', 'C#', 'Java', 'JavaScript', 'PHP'] },
  { title: 'AI / Machine Learning', icon: 'ai', items: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'SHAP', 'Grad-CAM'] },
  { title: 'Web & Databases', icon: 'database', items: ['HTML', 'CSS', '.NET', 'Windows Forms', 'MySQL', 'SQL Server'] },
  { title: 'Testing & QA', icon: 'flask', items: ['Manual Testing', 'Test Case Design', 'Selenium'] },
  { title: 'Networking', icon: 'network', items: ['TCP/IP', 'OSI', 'Subnetting', 'VLANs', 'OSPF', 'NAT · DHCP · DNS', 'Packet Tracer'] },
  { title: 'Tools', icon: 'tool', items: ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'Jupyter', 'Google Colab'] },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'web', label: 'Web' },
  { id: 'game', label: 'Game' },
];

// Screenshots are files inside public/SS/. "contain: true" shows the whole
// image instead of cropping it to fill the frame.
export const projects = [
  {
    title: 'University Management System',
    category: 'desktop',
    tech: ['Java', 'Swing', 'File I/O'],
    description: 'Desktop app for managing students, teachers, sections, fees and university funds.',
    highlights: [
      'Role-based login and sign-up',
      'Fee structure and fund management modules',
      'Persistent data storage with File I/O',
    ],
    repo: 'https://github.com/AyonBhowmick/University_Management_System',
    shots: [
      { src: 'SS/University mangemnet system/3.JPG', alt: 'Main screen' },
      { src: 'SS/University mangemnet system/2.JPG', alt: 'Login screen', contain: true },
      { src: 'SS/University mangemnet system/Capture.JPG', alt: 'Welcome screen', contain: true },
    ],
  },
  {
    title: 'Cafe Shop Management System',
    category: 'desktop',
    tech: ['C#', '.NET', 'SQL Server'],
    description: 'Café operations system with separate Admin and Cashier roles.',
    highlights: [
      'Admin dashboard with income and customer totals',
      'Product, user and order management',
      'Billing, payments and receipt generation',
    ],
    repo: 'https://github.com/AyonBhowmick/Cafe_Shop_Management_System',
    shots: [
      { src: 'SS/CAFE SHOP/dashboard.png', alt: 'Admin dashboard' },
      { src: 'SS/CAFE SHOP/welcome.png', alt: 'Welcome screen', contain: true },
      { src: 'SS/CAFE SHOP/login.png', alt: 'Sign in screen', contain: true },
      { src: 'SS/CAFE SHOP/register.png', alt: 'Register screen', contain: true },
    ],
  },
  {
    title: 'SkillSwap Connect',
    category: 'web',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    description: 'Web platform that connects learners and mentors for skill exchange and paid courses.',
    highlights: [
      'Roles for Learners, Mentors and Admins',
      'Course requests, messaging and progress tracking',
      'Certificate generation',
    ],
    repo: 'https://github.com/AyonBhowmick/SkillSwap-Connect',
    shots: [
      { src: 'SS/skillswap/Screenshot 2026-10-03 033710.png', alt: 'Home page' },
      { src: 'SS/skillswap/Screenshot 2026-10-03 033450.png', alt: 'Browse and request skills' },
      { src: 'SS/skillswap/Screenshot 2026-10-03 033424.png', alt: 'Learner dashboard' },
      { src: 'SS/skillswap/Screenshot 2026-10-03 033518.png', alt: 'Chat with mentor' },
      { src: 'SS/skillswap/Screenshot 2026-10-03 033230.png', alt: 'Admin dashboard' },
      { src: 'SS/skillswap/Screenshot 2026-10-03 033302.png', alt: 'User management' },
      { src: 'SS/skillswap/Screenshot 2026-10-03 033329.png', alt: 'Skill swap requests' },
    ],
  },
  {
    title: 'Virus Invaders',
    category: 'game',
    tech: ['C++', 'OpenGL', 'GLUT'],
    description: '2D arcade game where the player fights viruses and collects vaccines.',
    highlights: [
      'Real-time movement and collision detection',
      'Health, score and vaccine collection',
      'Five levels with dynamic weather effects',
    ],
    repo: 'https://github.com/AyonBhowmick/VIRUS_INVADERS',
    shots: [
      { src: 'SS/virus/4.JPG', alt: 'Level 1, sunny', contain: true },
      { src: 'SS/virus/3.JPG', alt: 'Level 2, night', contain: true },
      { src: 'SS/virus/2 (1).JPG', alt: 'Level 3, winter', contain: true },
      { src: 'SS/virus/1.JPG', alt: 'Level 4, rain', contain: true },
    ],
  },
];

export const researchAreas = [
  'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Data Mining',
  'Medical Image Analysis', 'Explainable AI', 'Computer Vision', 'Data Science',
];

// To add another paper, copy one { ... } block and change the values.
// "me" is your name exactly as it appears in the authors list (it is shown in bold).
export const publications = [
  {
    badge: 'IEEE · 2026',
    venueShort: 'PECCII 2026 · Pabna, Bangladesh',
    title:
      'Daily Peak Demand Forecasting in Bangladesh: A Leakage-Aware Comparison of Machine Learning, Deep Learning, and a Hybrid RF–Naive Model',
    authors: ['D. P. Karmakar', 'A. K. B. Ovi', 'T. B. Jenny', 'M. M. Hasan'],
    me: 'A. K. B. Ovi',
    venue:
      '2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)',
    pages: 'pp. 1–6',
    doi: '10.1109/PECCII70991.2026.11661966',
    url: 'https://ieeexplore.ieee.org/document/11661966',
  },
];

export const education = [
  {
    period: 'Jan 2023 – Oct 2026 (expected)',
    degree: 'B.Sc. in Computer Science and Engineering',
    school: 'American International University-Bangladesh (AIUB), Dhaka',
    result: 'CGPA 3.71 / 4.00',
  },
  {
    period: '2019 – 2021',
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'Dhaka Imperial College, Dhaka',
    result: 'GPA 5.00 / 5.00',
  },
  {
    period: '2017 – 2019',
    degree: 'Secondary School Certificate (SSC)',
    school: 'National Ideal School, Dhaka',
    result: 'GPA 4.78 / 5.00',
  },
];

export const activities = [
  { title: 'Cisco Networking Academy', note: 'Networking training and certification' },
  { title: 'IEEE SPAVe 7.0', note: 'Student Professional Awareness Venture, IEEE AIUB Student Branch' },
  { title: 'Student Member, IEEE AIUB Student Branch', note: '2026 – Present' },
];

export const contact = {
  heading: "Let's work together",
  text:
    "I'm looking for internships and entry-level roles in software engineering, machine learning, data science, QA or research. The fastest way to reach me is email.",
};
