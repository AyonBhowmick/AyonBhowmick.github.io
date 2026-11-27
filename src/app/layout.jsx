import '../index.css';
import { profile, site } from '../data/portfolio.js';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Analytics from '../components/Analytics.jsx';

const description =
  'Ayon Kumar Bhowmick Ovi: CSE student at AIUB (CGPA 3.71) building software and doing explainable machine-learning research, with 3 conference papers (1 published, 2 accepted) and 5 projects.';

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${profile.name} | Software & ML Research Portfolio`, template: `%s | ${profile.name}` },
  description,
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile', url: '/', title: `${profile.name} | Software & ML Research`,
    description: 'CSE @ AIUB · Software development and explainable machine learning · 3 conference papers.',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.jpg'] },
  icons: { icon: '/favicon.png', apple: '/apple-touch-icon.png' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f6fc' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0c16' },
  ],
};

// Applies the saved theme before the page paints, so there is no flash.
const themeScript = `try{var t=localStorage.getItem('ayon-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: site.url,
  image: `${site.url}img/profile.webp`,
  email: `mailto:${profile.email}`,
  jobTitle: 'Computer Science and Engineering student',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'American International University-Bangladesh' },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  knowsAbout: ['Machine Learning', 'Explainable AI', 'Deep Learning', 'Software Development', 'Data Analytics'],
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  );
}
