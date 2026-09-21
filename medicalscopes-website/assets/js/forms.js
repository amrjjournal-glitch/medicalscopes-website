/* ============================================================
   Medical Scopes — forms.js
   Centralized form handler: Formspree + mailto fallback.
   ✏️ To enable Formspree: create a form at formspree.io
      and paste your endpoint below (e.g. "https://formspree.io/f/abcdwxyz").
   ============================================================ */
(function () {
  "use strict";

  const FORMSPREE_ENDPOINT = ""; // ✏️ اتركه فارغاً لاستخدام mailto مؤقتاً
  const CONTACT_EMAIL = "info@medicalscopes.org";
  const THANK_YOU_URL = "/thank-you/";

  const MESSAGES = {
    en: {
      sending: "Sending…",
      success: "Thank you! Your message has been sent successfully.",
      error: "Something went wrong. Please try again or email us directly at " + CONTACT_EMAIL + "."
    },
    ar: {
      sending: "جارٍ الإرسال…",
      success: "شكراً لك! تم إرسال رسالتك بنجاح.",
      error: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على " + CONTACT_EMAIL + "."
    }
  };

  function lang() {
    try { return localStorage.getItem("ms_lang") || "en"; } catch (e) { return "en"; }
  }

  function showMsg(form, type, text) {
    let box = form.querySelector(".form-msg");
    if (!box) {
      box = document.createElement("div");
      form.insertBefore(box, form.firstChild);
    }
    box.className = "form-msg show " + type;
    box.textContent = text;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn ? btn.textContent : "";
    const M = MESSAGES[lang()] || MESSAGES.en;
    if (btn) { btn.disabled = true; btn.textContent = M.sending; }

    const data = new FormData(form);

    if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.indexOf("http") === 0) {
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      })
      .then(r => { if (r.ok) return r.json(); throw new Error("Network"); })
      .then(() => { window.location.href = THANK_YOU_URL; })
      .catch(() => {
        showMsg(form, "error", M.error);
        if (btn) { btn.disabled = false; btn.textContent = originalText; }
      });
    } else {
      // mailto fallback
      let body = "";
      data.forEach((v, k) => { body += k + ": " + v + "\n"; });
      const subject = encodeURIComponent("[AMS] " + (data.get("subject") || form.dataset.subject || "New submission"));
      window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + encodeURIComponent(body);
      showMsg(form, "success", M.success);
      setTimeout(() => form.reset(), 400);
      if (btn) { btn.disabled = false; btn.textContent = originalText; }
    }
  }

  function init() {
    document.querySelectorAll("form.ams-form").forEach(f => {
      if (f.dataset.bound) return;
      f.dataset.bound = "1";
      f.addEventListener("submit", handleSubmit);
    });
  }

  document.addEventListener("site:ready", init);
  document.addEventListener("DOMContentLoaded", init);
  if (document.readyState !== "loading") init();
})();