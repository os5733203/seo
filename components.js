/* ── components.js — nav + footer injected into every page ── */

function injectNav(activePage) {
  const nav = `
<nav>
  <a class="logo" href="index.html">ai<span>SEO</span>a</a>
  <div class="nav-center" id="nav-links">
    <a href="index.html" data-i18n="nav_home"${activePage==='home'?' class="active"':''}>Home</a>
    <a href="about.html" data-i18n="nav_about"${activePage==='about'?' class="active"':''}>About</a>
    <a href="portfolio.html" data-i18n="nav_portfolio"${activePage==='portfolio'?' class="active"':''}>Portfolio</a>
    <a href="index.html#services" data-i18n="nav_services">Services</a>
    <a href="blog.html" data-i18n="nav_blog"${activePage==='blog'?' class="active"':''}>Blog</a>
    <a href="index.html#contact" data-i18n="nav_contact">Contact</a>
  </div>
  <div class="nav-right">
    <button class="lang-btn" onclick="toggleLang()">العربية</button>
    <a class="nav-cta" href="index.html#contact" data-i18n="nav_cta">Free Audit</a>
    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html" data-i18n="nav_home">Home</a>
  <a href="about.html" data-i18n="nav_about">About</a>
  <a href="portfolio.html" data-i18n="nav_portfolio">Portfolio</a>
  <a href="index.html#services" data-i18n="nav_services">Services</a>
  <a href="blog.html" data-i18n="nav_blog">Blog</a>
  <a href="index.html#contact" data-i18n="nav_contact">Contact</a>
  <button class="lang-btn" onclick="toggleLang()" style="width:fit-content">العربية</button>
</div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function injectFooter() {
  const footer = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="logo" style="font-size:1.3rem">ai<span style="color:var(--accent2)">SEO</span>a</div>
      <p data-i18n="footer_desc">Professional SEO specialist helping businesses across Europe, Australia & the Arab world rank higher and grow faster.</p>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer_pages">Pages</h4>
      <a href="index.html" data-i18n="nav_home">Home</a>
      <a href="about.html" data-i18n="nav_about">About</a>
      <a href="portfolio.html" data-i18n="nav_portfolio">Portfolio</a>
      <a href="blog.html" data-i18n="nav_blog">Blog</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer_services">Services</h4>
      <a href="index.html#services">Technical SEO</a>
      <a href="index.html#services">Link Building</a>
      <a href="index.html#services">Local SEO</a>
      <a href="index.html#services">AI & SEO</a>
    </div>
    <div class="footer-col">
      <h4 data-i18n="footer_connect">Connect</h4>
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://x.com" target="_blank">Twitter / X</a>
      <a href="mailto:hello@aiseoa.com">hello@aiseoa.com</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p data-i18n="footer_rights">© 2025 aiseoa.com — All rights reserved.</p>
    <div class="social-links">
      <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      <a href="https://x.com" target="_blank">Twitter</a>
      <a href="mailto:hello@aiseoa.com">Email</a>
    </div>
  </div>
</footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}
