(function () {
  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- Theme toggle (dark / light, remembered) ---------- */
  var KEY = 'ayon-theme';
  var toggles = document.querySelectorAll('[data-theme-toggle]');

  function currentTheme() {
    var t = root.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function paintIcons() {
    var isDark = currentTheme() === 'dark';
    toggles.forEach(function (btn) {
      btn.querySelector('.icon-sun').hidden = !isDark;   // show sun in dark mode (click → light)
      btn.querySelector('.icon-moon').hidden = isDark;
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      paintIcons();
    });
  });
  paintIcons();

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  function closeMenu() { menu.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = menu.hidden;
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- Scroll spy: highlight the section in view ---------- */
  var links = document.querySelectorAll('.nav-link');
  var sections = Array.prototype.map.call(links, function (l) {
    return document.querySelector(l.getAttribute('href'));
  }).filter(Boolean);
  function spy() {
    var line = window.scrollY + 120;
    var active = null;
    sections.forEach(function (s) { if (s.offsetTop <= line) active = s.id; });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) active = sections[sections.length - 1].id;
    links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + active); });
  }
  window.addEventListener('scroll', spy, { passive: true });
  spy();

  /* ---------- Project filter ---------- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var projects = document.querySelectorAll('[data-category]');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      filterBtns.forEach(function (b) {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', String(b === btn));
      });
      projects.forEach(function (p) {
        p.hidden = !(f === 'all' || p.getAttribute('data-category') === f);
      });
    });
  });

  /* ---------- Screenshot placeholder if an image is missing ---------- */
  document.querySelectorAll('.shot img').forEach(function (img) {
    function fail() {
      img.hidden = true;
      var ph = img.parentElement.querySelector('.shot-placeholder');
      if (ph) ph.hidden = false;
    }
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener('error', fail);
  });

  /* ---------- Copy email ---------- */
  var copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = copyBtn.getAttribute('data-email');
      var label = copyBtn.querySelector('span');
      function done(msg) { label.textContent = msg; setTimeout(function () { label.textContent = 'Copy'; }, 1800); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done('Copied'); }, function () { selectEmail(); done('Select & copy'); });
      } else { selectEmail(); done('Select & copy'); }
    });
  }
  function selectEmail() {
    var el = document.getElementById('email-text');
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  /* ---------- Reveal on scroll ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
