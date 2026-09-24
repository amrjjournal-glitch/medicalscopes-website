/* ============================================================
   Association of Medical Scopes — components.js
   (Shared Header, Footer, Head defaults, A11y)
   v1.3 — Logo path · Favicon injection · Nav active fix
          · Dropdown ARIA · Social links
   ============================================================ */
(function () {
  "use strict";

  // الشعار الرسمي (خلفية شفافة) — المسار الجديد داخل assets
  const LOGO_URL = "/assets/img/logo.png";

  const LOGO_IMG = `
  <img src="${LOGO_URL}" alt="Association of Medical Scopes logo"
       class="brand-logo" width="44" height="44" decoding="async">`;

  // ✏️ عدّل روابط السوشيال هنا بالحسابات الحقيقية (أو احذف أي شبكة)
  const SOCIAL_HTML = `
  <div class="social-links">
    <a href="https://www.linkedin.com/company/medicalscopes" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11 21 13.9V21h-4v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9z"/></svg></a>
    <a href="https://x.com/medicalscopes" target="_blank" rel="noopener" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L1.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7.1 3.8H5.3L17.8 20z"/></svg></a>
    <a href="https://www.facebook.com/medicalscopes" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.5V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.7H7.8V14h2.7v8h3z"/></svg></a>
    <a href="https://www.youtube.com/@medicalscopes" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 12s0-3.3-.4-4.8a2.6 2.6 0 0 0-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.4A2.6 2.6 0 0 0 1.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8c.2.9.9 1.6 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z"/></svg></a>
  </div>`;

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
            <a href="/about/" data-i18n="nav.about" aria-haspopup="true">About Us</a>
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
            <a href="/media/news/" data-i18n="nav.media" aria-haspopup="true">Media Center</a>
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
        <button class="lang-btn" type="button" data-lang-btn aria-label="Toggle language">عربي</button>
        <a href="/membership/join/" class="join-btn" data-i18n="nav.join">Join Us</a>
        <button class="hamburger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
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
        <button class="m-toggle" type="button" aria-expanded="false"><span data-i18n="nav.about">About Us</span> <span class="caret" aria-hidden="true">▾</span></button>
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
        <button class="m-toggle" type="button" aria-expanded="false"><span data-i18n="nav.media">Media Center</span> <span class="caret" aria-hidden="true">▾</span></button>
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
        ${SOCIAL_HTML}
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

  /* يضيف روابط الفافيكون و theme-color لكل الصفحات تلقائياً —
     يتخطى أي عنصر موجود مسبقاً في HTML الصفحة (لا تكرار أبداً) */
  function injectHeadDefaults() {
    const head = document.head;
    const add = (tag, attrs) => {
      const el = document.createElement(tag);
      Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
      head.appendChild(el);
    };
    if (!document.querySelector('link[rel~="icon"]')) {
      add("link", { rel: "icon", href: "/favicon.ico", sizes: "any" });
      add("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" });
      add("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" });
    }
    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      add("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" });
    }
    if (!document.querySelector('link[rel="manifest"]')) {
      add("link", { rel: "manifest", href: "/site.webmanifest" });
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      add("meta", { name: "theme-color", content: "#0b4f6c" });
    }
  }

  /* تفعيل الرابط النشط: تطابق تام أولاً، وإلا أطول تطابق جزئي —
     aria-current على عنصر واحد فقط + إبراز رابط القسم الأب */
  function markActive() {
    const path = location.pathname.replace(/\/+$/, "") || "/";
    const norm = h => (h || "").replace(/\/+$/, "") || "/";
    const links = [...document.querySelectorAll(".nav a[href], .m-nav a[href]")];

    // 1) تطابق تام
    let targets = links.filter(a => norm(a.getAttribute("href")) === path);

    // 2) وإلا: أطول تطابق جزئي (قسم الأب)
    if (!targets.length) {
      let best = null, bestLen = 0;
      links.forEach(a => {
        const href = norm(a.getAttribute("href"));
        if (href !== "/" && path.startsWith(href + "/") && href.length > bestLen) {
          best = a; bestLen = href.length;
        }
      });
      if (best) targets = [best];
    }

    let currentSet = false;
    targets.forEach(a => {
      a.classList.add("active");
      if (!currentSet) { a.setAttribute("aria-current", "page"); currentSet = true; }
      const group = a.closest(".has-drop, .m-group");
      if (group) {
        const parent = group.querySelector(":scope > a, :scope > .m-toggle");
        if (parent && parent !== a) parent.classList.add("active");
      }
    });
  }

  /* مزامنة aria-expanded للدروبداون مع hover و focus */
  function dropdownA11y() {
    document.querySelectorAll(".has-drop").forEach(li => {
      const link = li.querySelector(":scope > a");
      if (!link) return;
      const set = v => link.setAttribute("aria-expanded", v);
      set("false");
      li.addEventListener("mouseenter", () => set("true"));
      li.addEventListener("mouseleave", () => set("false"));
      li.addEventListener("focusin", () => set("true"));
      li.addEventListener("focusout", e => { if (!li.contains(e.relatedTarget)) set("false"); });
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
    injectHeadDefaults();
    const h = document.getElementById("site-header");
    const f = document.getElementById("site-footer");
    if (h) h.innerHTML = HEADER_HTML;
    if (f) f.innerHTML = FOOTER_HTML;
    markActive();
    dropdownA11y();
    injectAccessibility();
    document.dispatchEvent(new CustomEvent("site:ready"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();