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

  /* ---------- Project screenshot sliders ---------- */
  document.querySelectorAll('[data-slider]').forEach(function (shot) {
    var track = shot.querySelector('.slides');
    var ph = shot.querySelector('.shot-placeholder');
    var prev = shot.querySelector('.prev'), next = shot.querySelector('.next');
    var count = shot.querySelector('.slide-count');

    function imgs() { return track.querySelectorAll('img'); }
    function update() {
      var n = imgs().length;
      var i = n ? Math.round(track.scrollLeft / track.clientWidth) + 1 : 0;
      var multi = n > 1;
      prev.hidden = next.hidden = count.hidden = !multi;
      if (multi) count.textContent = i + ' / ' + n;
      track.hidden = n === 0;
      if (ph) ph.hidden = n !== 0;
    }
    function go(dir) {
      var n = imgs().length; if (!n) return;
      var i = Math.round(track.scrollLeft / track.clientWidth) + dir;
      if (i < 0) i = n - 1; if (i >= n) i = 0;
      track.scrollTo({ left: i * track.clientWidth });
    }
    // drop any screenshot that fails to load; show the placeholder if none are left
    imgs().forEach(function (img) {
      function fail() { img.remove(); update(); }
      if (img.complete && img.naturalWidth === 0) fail();
      else img.addEventListener('error', fail);
    });
    prev.addEventListener('click', function () { go(-1); });
    next.addEventListener('click', function () { go(1); });
    track.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
    update();
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

/* v2: scroll progress + back-to-top */
(function () {
  var bar = document.getElementById('progress');
  var top = document.getElementById('to-top');
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? window.scrollY / h : 0;
    if (bar) bar.style.transform = 'scaleX(' + p + ')';
    if (top) top.classList.toggle('show', window.scrollY > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
