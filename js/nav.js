/**
 * Shared top navigation — single source of truth for all pages.
 * Injects the header (+ mobile menu) and wires up its behavior.
 * Styles live in css/nav.css. Edit LINKS below to change the menu everywhere.
 */
(function () {
  const LINKS = [
    { href: 'projects.html', label: 'Projects' },
    { href: 'resume.html', label: 'About' },
    { href: 'https://www.linkedin.com/in/mshie/', label: 'LinkedIn', external: true },
  ];

  const page = (location.pathname.split('/').pop() || 'index.html');

  const linkHTML = (extraClass) => LINKS.map(l => {
    const active = l.href === page ? ' class="active"' : '';
    const ext = l.external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${l.href}"${active}${ext}>${l.label}</a>`;
  }).join('');

  const html = `
  <header>
    <a class="logo" href="index.html">Mu<span>.</span></a>
    <nav>${linkHTML()}</nav>
    <button class="menu-toggle" id="menuToggle" aria-label="Menu">
      <svg viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
    </button>
  </header>
  <div class="menu-backdrop" id="menuBackdrop"></div>
  <div class="mobile-menu" id="mobileMenu">${linkHTML()}</div>`;

  const mount = document.querySelector('[data-nav-mount]') || document.body;
  mount.insertAdjacentHTML('afterbegin', html);

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuBackdrop = document.getElementById('menuBackdrop');

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains('open');
    mobileMenu.classList.toggle('open');
    menuBackdrop.classList.toggle('open');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  menuToggle.addEventListener('click', toggleMenu);
  menuBackdrop.addEventListener('click', toggleMenu);

  // ── smooth page transitions ──
  const ready = () => document.body.classList.add('page-ready');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(ready));
  } else {
    requestAnimationFrame(ready);
  }
  // restore when coming back via bfcache
  window.addEventListener('pageshow', e => { if (e.persisted) ready(); });

  // fade out before following internal links (relative .html hrefs only)
  document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || a.target === '_blank' || /^(https?:|mailto:|tel:|#)/.test(href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    document.body.classList.remove('page-ready');
    setTimeout(() => { location.href = href; }, 200);
  });
})();
