/* ============================================================
   Medical Scopes — main.js (UI Interactivity & Animations)
   ============================================================ */
(function () {
  "use strict";

  let initialized = false;

  function init() {
    if (initialized) return;
    initialized = true;

    const header = document.querySelector(".site-header");
    const onScroll = () => { if (header) header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mobile Navigation Drawer
    const burger = document.querySelector(".hamburger");
    const drawer = document.querySelector(".mobile-nav");
    const overlay = document.querySelector(".nav-overlay");

    function closeMenu() {
      if (drawer) drawer.classList.remove("open");
      if (burger) { burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
      if (overlay) overlay.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }

    if (burger && drawer) {
      burger.addEventListener("click", () => {
        const open = !drawer.classList.contains("open");
        if (open) {
          drawer.classList.add("open");
          burger.classList.add("open");
          if (overlay) overlay.classList.add("show");
          burger.setAttribute("aria-expanded", "true");
          document.body.classList.add("no-scroll");
        } else closeMenu();
      });
    }

    if (overlay) overlay.addEventListener("click", closeMenu);
    if (drawer) {
      drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
      drawer.querySelectorAll(".m-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
          const parent = btn.parentElement;
          const isOpen = parent.classList.toggle("open");
          btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });
      });
    }

    // Escape closes menu
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

    // Scroll Reveal Animation
    const io = "IntersectionObserver" in window ? new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 }) : null;

    document.querySelectorAll(".reveal").forEach(el => {
      if (io) io.observe(el);
      else el.classList.add("in");
    });
  }

  document.addEventListener("site:ready", init);
  if (document.readyState !== "loading") init();
})();