module.exports = {
  content: ['./index.html', './assets/js/main.js'],
  theme: { extend: {
    colors: {
      bg: 'rgb(var(--bg) / <alpha-value>)', panel: 'rgb(var(--panel) / <alpha-value>)',
      fg: 'rgb(var(--fg) / <alpha-value>)', muted: 'rgb(var(--muted) / <alpha-value>)',
      line: 'rgb(var(--line) / <alpha-value>)', accent: 'rgb(var(--accent) / <alpha-value>)',
      accent2: 'rgb(var(--accent2) / <alpha-value>)'
    },
    maxWidth: { site: '1140px' }
  } }
};
