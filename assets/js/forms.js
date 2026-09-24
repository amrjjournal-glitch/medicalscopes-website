/* ============================================================
   Association of Medical Scopes — forms.js
   Centralized form handler:
   1) Netlify Forms  ← لو الفورم يحمل data-netlify="true" (الأولوية)
   2) Formspree      ← لو وُضع الـ endpoint أدناه
   3) mailto fallback ← تلقائياً عند غياب الاثنين
   ============================================================ */
(function () {
  "use strict";

  const FORMSPREE_ENDPOINT = ""; // ✏️ اتركه فارغاً لاستخدام Netlify أو mailto
  const CONTACT_EMAIL = "info@medicalscopes.org";
  const THANK_YOU_URL = "/thank-you/";

  const MESSAGES = {
    en: {
      sending: "Sending…",
      mailto: "Your email app is opening with the completed message. Please send it to finish.",
      error: "Something went wrong. Please try again or email us directly at " + CONTACT_EMAIL + "."
    },
    ar: {
      sending: "جارٍ الإرسال…",
      mailto: "سيتم فتح تطبيق البريد الإلكتروني بالرسالة الجاهزة. اضغط إرسال لإكمال الطلب.",
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

  function setLoading(btn, loading, text) {
    if (!btn) return;
    btn.disabled = loading;
    if (text != null) btn.textContent = text;
  }

  // Netlify يتطلب حقل form-name مخفي ضمن بيانات الإرسال
  function ensureNetlifyFields(form) {
    if (!form.querySelector('input[name="form-name"]')) {
      const h = document.createElement("input");
      h.type = "hidden";
      h.name = "form-name";
      h.value = form.getAttribute("name") || "contact";
      form.appendChild(h);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn ? btn.textContent : "";
    const M = MESSAGES[lang()] || MESSAGES.en;
    const data = new FormData(form);

    // Honeypot — تجاهل صامت للبوتات
    if (data.get("bot-field")) { form.reset(); return; }

    setLoading(btn, true, M.sending);
    const fail = () => { showMsg(form, "error", M.error); setLoading(btn, false, originalText); };

    if (form.hasAttribute("data-netlify")) {
      // Netlify Forms (AJAX)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      })
      .then(r => { if (!r.ok) throw new Error("Network"); window.location.href = THANK_YOU_URL; })
      .catch(fail);
    } else if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.indexOf("http") === 0) {
      // Formspree
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      })
      .then(r => { if (!r.ok) throw new Error("Network"); window.location.href = THANK_YOU_URL; })
      .catch(fail);
    } else {
      // mailto fallback — رسالة محايدة بدون ادعاء نجاح الإرسال
      let body = "";
      data.forEach((v, k) => { if (k !== "bot-field") body += k + ": " + v + "\n"; });
      const subject = encodeURIComponent("[AMS] " + (data.get("subject") || form.dataset.subject || "New submission"));
      showMsg(form, "info", M.mailto);
      window.setTimeout(() => {
        window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + encodeURIComponent(body);
      }, 120);
      setTimeout(() => form.reset(), 700);
      setLoading(btn, false, originalText);
    }
  }

  function init() {
    document.querySelectorAll("form.ams-form").forEach(f => {
      if (f.hasAttribute("data-netlify")) ensureNetlifyFields(f);
      if (f.dataset.bound) return;
      f.dataset.bound = "1";
      f.addEventListener("submit", handleSubmit);
    });
  }

  document.addEventListener("site:ready", init);
  document.addEventListener("DOMContentLoaded", init);
  if (document.readyState !== "loading") init();
})();