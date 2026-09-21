/* ============================================================
   Association of Medical Scopes — components.js
   (Shared Header, Footer, A11y)
   ============================================================ */
(function () {
  "use strict";

  // ---- Official Logo (رابط مباشر من GitHub) ----
  const LOGO_URL = "https://raw.githubusercontent.com/amrjjournal-glitch/medicalscopes-website/main/medicalscopes-website/logo%20(2).png";

  const LOGO_IMG = `
  <img src="${LOGO_URL}" alt="Association of Medical Scopes Logo"
       class="brand-logo" width="44" height="44" loading="lazy"
       style="object-fit:contain;border-radius:10px;">`;

  const HEADER_HTML = `
  <div class="topbar">
    <div class="container">
      <div class="topbar-left">
        <span class="topbar-item">✉ <a href="mailto:info@medicalscopes.org">info@medicalscopes.org</a></span>
        <span class="topbar-item">📍 <span data-i18n="top.location">United States</span></span>
      </div>
      <span class="topbar-tag" data-i18n="top.tag">A Nonprofit Scientific Association</span>
    </div>
  </div>
  <header class="site-header">
    <div class="container header-inner">
      <a href="/" class="brand" aria-label="Association of Medical Scopes Home">
        ${LOGO_IMG}
        <span class="brand-name">
          <span data-i18n="site.name">Association of Medical Scopes</span>
          <small data-i18n="site.tag">Scientific Association</small>
        </span>
      </a>
      <nav aria-label="Main">
        <ul class="nav">
          <li><a href="/" data-i18n="nav.home">Home</a></li>
          <li class="has-drop">
            <a href="/about/" data-i18n="nav.about">About Us</a>
            <ul class="dropdown">
              <li><a href="/about/" data-i18n="nav.aboutUs">Who We Are</a></li>
              <li><a href="/about/mission/" data-i18n="nav.mission">Mission & Vision</a></li>
              <li><a href="/about/board/" data-i18n="nav.board">Board of Directors</a></li>
              <li><a href="/about/committees/" data-i18n="nav.committees">Scientific Committees</a></li>
              <li><a href="/about/documents/" data-i18n="nav.documents">Official Documents</a></li>
            </ul>
          </li>
          <li><a href="/membership/" data-i18n="nav.membership">Membership</a></li>
          <li><a href="/activities/" data-i18n="nav.activities">Activities</a></li>
          <li><a href="/events/" data-i18n="nav.events">Events</a></li>
          <li class="has-drop">
            <a href="/media/news/" data-i18n="nav.media">Media Center</a>
            <ul class="dropdown">
              <li><a href="/media/news/" data-i18n="nav.news">News & Press</a></li>
              <li><a href="/media/gallery/" data-i18n="nav.gallery">Gallery</a></li>
              <li><a href="/media/resources/" data-i18n="nav.resources">Resources</a></li>
            </ul>
          </li>
          <li><a href="/contact/" data-i18n="nav.contact">Contact</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <button class="lang-btn" data-lang-btn aria-label="Toggle language">عربي</button>
        <a href="/membership/join/" class="join-btn" data-i18n="nav.join">Join Us</a>
        <button class="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="mobileNav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <div class="nav-overlay"></div>
  <nav class="mobile-nav" id="mobileNav" aria-label="Mobile Navigation">
    <ul class="m-nav">
      <li><a href="/" data-i18n="nav.home">Home</a></li>
      <li class="m-group">
        <button class="m-toggle" aria-expanded="false"><span data-i18n="nav.about">About Us</span> <span class="caret" aria-hidden="true">▾</span></button>
        <ul class="m-sub">
          <li><a href="/about/" data-i18n="nav.aboutUs">Who We Are</a></li>
          <li><a href="/about/mission/" data-i18n="nav.mission">Mission & Vision</a></li>
          <li><a href="/about/board/" data-i18n="nav.board">Board of Directors</a></li>
          <li><a href="/about/committees/" data-i18n="nav.committees">Scientific Committees</a></li>
          <li><a href="/about/documents/" data-i18n="nav.documents">Official Documents</a></li>
        </ul>
      </li>
      <li><a href="/membership/" data-i18n="nav.membership">Membership</a></li>
      <li><a href="/activities/" data-i18n="nav.activities">Activities</a></li>
      <li><a href="/events/" data-i18n="nav.events">Events</a></li>
      <li class="m-group">
        <button class="m-toggle" aria-expanded="false"><span data-i18n="nav.media">Media Center</span> <span class="caret" aria-hidden="true">▾</span></button>
        <ul class="m-sub">
          <li><a href="/media/news/" data-i18n="nav.news">News & Press</a></li>
          <li><a href="/media/gallery/" data-i18n="nav.gallery">Gallery</a></li>
          <li><a href="/media/resources/" data-i18n="nav.resources">Resources</a></li>
        </ul>
      </li>
      <li><a href="/contact/" data-i18n="nav.contact">Contact</a></li>
      <li><a href="/membership/join/" class="m-join" data-i18n="nav.join">Join Us</a></li>
    </ul>
  </nav>`;

  const FOOTER_HTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a href="/" class="brand footer-brand" aria-label="Association of Medical Scopes">
          ${LOGO_IMG}
          <span class="brand-name">
            <span data-i18n="site.name">Association of Medical Scopes</span>
            <small data-i18n="site.tag">Scientific Association</small>
          </span>
        </a>
        <p data-i18n="footer.about">A U.S.-registered nonprofit scientific association dedicated to advancing medical research, education, and professional collaboration worldwide.</p>
      </div>
      <div>
        <h4 data-i18n="footer.quick">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="/" data-i18n="nav.home">Home</a></li>
          <li><a href="/about/" data-i18n="nav.about">About Us</a></li>
          <li><a href="/membership/" data-i18n="nav.membership">Membership</a></li>
          <li><a href="/events/" data-i18n="nav.events">Events</a></li>
          <li><a href="/faq/" data-i18n="nav.faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer.legal">Legal</h4>
        <ul class="footer-links">
          <li><a href="/legal/privacy/" data-i18n="footer.privacy">Privacy Policy</a></li>
          <li><a href="/legal/terms/" data-i18n="footer.terms">Terms of Use</a></li>
          <li><a href="/legal/disclosures/" data-i18n="footer.disclosures">Legal Disclosures</a></li>
          <li><a href="/about/documents/" data-i18n="nav.documents">Official Documents</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer.contact">Contact Us</h4>
        <ul class="footer-contact">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            <a href="mailto:info@medicalscopes.org">info@medicalscopes.org</a>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span data-i18n="top.location">United States</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>
            <span>medicalscopes.org</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p><span data-i18n="footer.rights">© Association of Medical Scopes. All rights reserved.</span> <span data-year>2026</span></p>
        <p class="footer-nonprofit" data-i18n="footer.nonprofit">Association of Medical Scopes is a nonprofit organization registered in the United States. Application for 501(c)(3) tax-exempt status is in progress.</p>
      </div>
    </div>
  </footer>`;

  function markActive() {
    let path = location.pathname.replace(/\/+$/, "") || "/";
    document.querySelectorAll(".nav a[href], .m-nav a[href]").forEach(a => {
      let href = (a.getAttribute("href") || "").replace(/\/+$/, "") || "/";
      if (href === path || (href !== "/" && path.startsWith(href))) {
        a.classList.add("active");
        a.setAttribute("aria-current", "page");
      }
    });
  }

  function injectAccessibility() {
    if (!document.querySelector(".skip-link")) {
      const main = document.querySelector("main");
      if (main && !main.id) main.id = "main-content";
      const a = document.createElement("a");
      a.href = "#main-content";
      a.className = "skip-link";
      a.setAttribute("data-i18n", "a11y.skip");
      a.textContent = "Skip to main content";
      document.body.insertBefore(a, document.body.firstChild);
    }
    if (!document.querySelector(".to-top")) {
      const btn = document.createElement("button");
      btn.className = "to-top";
      btn.setAttribute("aria-label", "Back to top");
      btn.setAttribute("data-i18n-title", "a11y.top");
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>';
      document.body.appendChild(btn);
      btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
      const onScroll = () => btn.classList.toggle("show", window.scrollY > 600);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  }

  function inject() {
    const h = document.getElementById("site-header");
    const f = document.getElementById("site-footer");
    if (h) h.innerHTML = HEADER_HTML;
    if (f) f.innerHTML = FOOTER_HTML;
    markActive();
    injectAccessibility();
    document.dispatchEvent(new CustomEvent("site:ready"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();
