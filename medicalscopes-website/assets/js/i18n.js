/* ============================================================
   Association of Medical Scopes — i18n.js (Bilingual Translation System)
   v1.3 — ?lang= URL param · a11y keys · form.consent · t() export
   ============================================================ */
window.I18N = (function () {
  "use strict";

  const DICT = {
    en: {
      "meta.title": "Association of Medical Scopes | Advancing Medical Science & Collaboration",
      "meta.desc": "Association of Medical Scopes is a U.S.-registered nonprofit scientific association advancing medical research, education, conferences and publishing.",
      "site.name": "Association of Medical Scopes",
      "site.tag": "Scientific Association",
      "top.location": "United States",
      "top.tag": "A Nonprofit Scientific Association",
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.aboutUs": "Who We Are",
      "nav.mission": "Mission & Vision",
      "nav.board": "Board of Directors",
      "nav.committees": "Scientific Committees",
      "nav.documents": "Official Documents",
      "nav.membership": "Membership",
      "nav.activities": "Activities",
      "nav.events": "Events",
      "nav.media": "Media Center",
      "nav.news": "News & Press",
      "nav.gallery": "Gallery",
      "nav.resources": "Resources",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.join": "Join Us",
      "a11y.skip": "Skip to main content",
      "a11y.top": "Back to top",
      "a11y.lang": "Switch language to Arabic",
      "a11y.menuOpen": "Open menu",
      "a11y.menuClose": "Close menu",
      "about.est": "Est. 2026 · USA",
      "bc.home": "Home",
      "form.name": "Full Name",
      "form.email": "Email Address",
      "form.subject": "Subject",
      "form.message": "Your Message",
      "form.send": "Send Message",
      "form.success": "Thank you! Your message has been sent successfully.",
      "form.consent": "I agree to the <a href='/legal/privacy/'>Privacy Policy</a>.",

      "footer.about": "A U.S.-registered nonprofit scientific association dedicated to advancing medical research, education, and professional collaboration worldwide.",
      "footer.quick": "Quick Links",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Use",
      "footer.disclosures": "Legal Disclosures",
      "footer.contact": "Contact Us",
      "footer.rights": "© Association of Medical Scopes. All rights reserved.",
      "footer.nonprofit": "Association of Medical Scopes is a nonprofit organization registered in the United States. Application for 501(c)(3) tax-exempt status is in progress.",

      "hero.eyebrow": "U.S.-Based Nonprofit Scientific Association",
      "hero.title": "Broadening the Horizons of <span>Medical Science</span>",
      "hero.sub": "We support medical research, education, and professional collaboration — connecting healthcare minds from the United States to the world.",
      "hero.cta1": "Become a Member",
      "hero.cta2": "Discover Who We Are",

      "notice": "🚧 Welcome! Our website is newly launched — some sections are still under development. Our first scientific activities will begin in 2027. Thank you for your patience.",

      "stats.founded": "Founded",
      "stats.foundedV": "2026",
      "stats.reg": "U.S. Registered",
      "stats.regV": "Nonprofit",
      "stats.pillars": "Scientific Pillars",
      "stats.pillarsV": "4",
      "stats.status": "501(c)(3)",

      "about.eyebrow": "Who We Are",
      "about.title": "A New Chapter in Medical Collaboration",
      "about.p1": "Association of Medical Scopes is a newly established nonprofit scientific association, registered in the United States, founded by a group of physicians and researchers who share one belief: medical knowledge grows when it is shared.",
      "about.p2": "We are building a platform that supports researchers, empowers young professionals, and connects the medical community through research, conferences, training, and publication.",
      "about.link": "Learn More About Us →",
      "about.c1": "Research",
      "about.c2": "Education",
      "about.c3": "Collaboration",

      "mv.eyebrow": "Our Foundation",
      "mv.title": "Mission, Vision & Values",
      "mv.mT": "Our Mission",
      "mv.mP": "To advance medical science by supporting research, continuous education, and meaningful collaboration among healthcare professionals.",
      "mv.vT": "Our Vision",
      "mv.vP": "A global medical community where knowledge is accessible, shared, and transformed into better health for all.",
      "mv.valT": "Our Values",
      "mv.valP": "Integrity · Excellence · Collaboration · Transparency",

      "pillars.eyebrow": "What We Do",
      "pillars.title": "Four Scientific Pillars",
      "pillars.sub": "Our activities are under preparation and will launch progressively starting 2027 — here is what we are building.",
      "tag.soon": "Coming Soon",
      "tag.plan": "Planned 2027",
      "p1T": "Scientific Research",
      "p1P": "Grants, mentorship, and resources that empower medical researchers at every career stage.",
      "p2T": "Conferences",
      "p2P": "International medical conferences that bring experts together to share the latest advances.",
      "p3T": "Workshops & Training",
      "p3P": "Hands-on workshops and continuous medical education for students and professionals.",
      "p4T": "Scientific Publishing",
      "p4P": "Journals and platforms that give researchers a voice and disseminate medical knowledge.",

      "conf.eyebrow": "Save the Date",
      "conf.title": "First International Medical Conference — 2027",
      "conf.p": "We are preparing our first international conference, scheduled for early 2027. Details on the scientific program, speakers, and registration will be announced soon.",
      "conf.btn": "View Events Page",

      "trans.eyebrow": "Transparency",
      "trans.title": "Governance & Official Documents",
      "trans.p": "As part of our commitment to full transparency, we publish our official registration and governance documents as they are finalized.",
      "trans.d1": "Certificate of Incorporation",
      "trans.d2": "Association Bylaws",
      "trans.d3": "Conflict of Interest Policy",
      "trans.pdf": "PDF — Available Soon",
      "trans.btn": "Visit Documents Page",

      "cta.title": "Be Part of the Beginning",
      "cta.p": "Join a growing community of physicians, researchers, and students shaping the future of medical science.",
      "cta.btn": "Apply for Membership"
    },

    ar: {
      "meta.title": "جمعية ميديكال سكوبس | للارتقاء بالعلوم الطبية والتعاون",
      "meta.desc": "جمعية ميديكال سكوبس جمعية علمية غير ربحية مسجلة في الولايات المتحدة تدعم البحث الطبي والتعليم والمؤتمرات والنشر العلمي.",
      "site.name": "جمعية ميديكال سكوبس",
      "site.tag": "جمعية علمية",
      "top.location": "الولايات المتحدة الأمريكية",
      "top.tag": "جمعية علمية غير ربحية",
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.aboutUs": "نبذة عن الجمعية",
      "nav.mission": "الرؤية والرسالة",
      "nav.board": "مجلس الإدارة",
      "nav.committees": "اللجان العلمية",
      "nav.documents": "الوثائق الرسمية",
      "nav.membership": "العضوية",
      "nav.activities": "الأنشطة العلمية",
      "nav.events": "الفعاليات",
      "nav.media": "المركز الإعلامي",
      "nav.news": "الأخبار والبيانات",
      "nav.gallery": "معرض الصور",
      "nav.resources": "المكتبة والموارد",
      "nav.faq": "الأسئلة الشائعة",
      "nav.contact": "تواصل معنا",
      "nav.join": "انضم إلينا",
      "a11y.skip": "تخطَّ إلى المحتوى الرئيسي",
      "a11y.top": "العودة إلى الأعلى",
      "a11y.lang": "تغيير اللغة إلى الإنجليزية",
      "a11y.menuOpen": "فتح القائمة",
      "a11y.menuClose": "إغلاق القائمة",
      "about.est": "تأسست 2026 · الولايات المتحدة",
      "bc.home": "الرئيسية",
      "form.name": "الاسم الكامل",
      "form.email": "البريد الإلكتروني",
      "form.subject": "الموضوع",
      "form.message": "رسالتك",
      "form.send": "إرسال الرسالة",
      "form.success": "شكراً لك! تم إرسال رسالتك بنجاح.",
      "form.consent": "أوافق على <a href='/legal/privacy/'>سياسة الخصوصية</a>.",

      "footer.about": "جمعية علمية غير ربحية مسجلة في الولايات المتحدة، تُعنى بالارتقاء بالبحث الطبي والتعليم والتعاون المهني حول العالم.",
      "footer.quick": "روابط سريعة",
      "footer.legal": "الصفحات القانونية",
      "footer.privacy": "سياسة الخصوصية",
      "footer.terms": "شروط الاستخدام",
      "footer.disclosures": "الإفصاحات القانونية",
      "footer.contact": "تواصل معنا",
      "footer.rights": "© جمعية ميديكال سكوبس. جميع الحقوق محفوظة.",
      "footer.nonprofit": "جمعية ميديكال سكوبس منظمة غير ربحية مسجلة في الولايات المتحدة الأمريكية، وطلب الإعفاء الضريبي 501(c)(3) قيد التقدم.",

      "hero.eyebrow": "جمعية علمية غير ربحية — الولايات المتحدة",
      "hero.title": "نوسّع آفاق <span>العلوم الطبية</span>",
      "hero.sub": "ندعم البحث الطبي والتعليم والتعاون المهني، ونربط العقول الطبية من الولايات المتحدة إلى العالم.",
      "hero.cta1": "كن عضواً معنا",
      "hero.cta2": "تعرّف على الجمعية",

      "notice": "🚧 أهلاً بك! موقعنا حديث الإطلاق — بعض الأقسام لا تزال قيد التطوير. ستنطلق أول أنشطتنا العلمية في عام 2027. شكراً لتفهّمكم.",

      "stats.founded": "سنة التأسيس",
      "stats.foundedV": "2026",
      "stats.reg": "مسجلة في أمريكا",
      "stats.regV": "غير ربحية",
      "stats.pillars": "ركائز علمية",
      "stats.pillarsV": "4",
      "stats.status": "قيد التقدم",

      "about.eyebrow": "من نحن",
      "about.title": "فصل جديد في التعاون الطبي",
      "about.p1": "جمعية ميديكال سكوبس جمعية علمية غير ربحية حديثة التأسيس، مسجلة في الولايات المتحدة الأمريكية، أسسها نخبة من الأطباء والباحثين يجمعهم إيمان واحد: المعرفة الطبية تنمو حين تُشارَك.",
      "about.p2": "نبني منصة تدعم الباحثين، وتمكّن الكوادر الشابة، وتربط المجتمع الطبي عبر الأبحاث والمؤتمرات والتدريب والنشر العلمي.",
      "about.link": "اعرف المزيد عنا ←",
      "about.c1": "الأبحاث",
      "about.c2": "التعليم",
      "about.c3": "التعاون",

      "mv.eyebrow": "أسسنا",
      "mv.title": "الرؤية والرسالة والقيم",
      "mv.mT": "رسالتنا",
      "mv.mP": "الارتقاء بالعلوم الطبية عبر دعم البحث العلمي، والتعليم المستمر، والتعاون الفعّال بين المتخصصين في الرعاية الصحية.",
      "mv.vT": "رؤيتنا",
      "mv.vP": "مجتمع طبي عالمي تتوافر فيه المعرفة وتُتشارك لتتحول إلى صحة أفضل للجميع.",
      "mv.valT": "قيمنا",
      "mv.valP": "النزاهة · التميز · التعاون · الشفافية",

      "pillars.eyebrow": "ماذا نقدم",
      "pillars.title": "أربع ركائز علمية",
      "pillars.sub": "أنشطتنا قيد الإعداد وستُطلق تباعاً بدءاً من عام 2027 — إليك ما نبنيه.",
      "tag.soon": "قريباً",
      "tag.plan": "مخطط 2027",
      "p1T": "الأبحاث العلمية",
      "p1P": "منح وإرشاد وموارد تمكّن الباحثين الطبيين في جميع المراحل المهنية.",
      "p2T": "المؤتمرات",
      "p2P": "مؤتمرات طبية دولية تجمع الخبراء لتبادل أحدث المستجدات العلمية.",
      "p3T": "ورش العمل والتدريب",
      "p3P": "ورش تطبيقية وبرامج تعليم طبي مستمر للطلاب والممارسين.",
      "p4T": "النشر العلمي",
      "p4P": "دوريات ومنصات تمنح الباحثين صوتاً وتنشر المعرفة الطبية الرصينة.",

      "conf.eyebrow": "احفظ التاريخ",
      "conf.title": "المؤتمر الطبي الدولي الأول — 2027",
      "conf.p": "نعمل على التحضير لمؤتمرنا الدولي الأول، المقرر عقده في مطلع عام 2027. ستُعلن تفاصيل البرنامج العلمي والمتحدثين والتسجيل قريباً.",
      "conf.btn": "صفحة الفعاليات",

      "trans.eyebrow": "الشفافية",
      "trans.title": "الحوكمة والوثائق الرسمية",
      "trans.p": "التزاماً بمبدأ الشفافية الكاملة، ننشر وثائق التسجيل والحوكمة الرسمية فور اعتمادها.",
      "trans.d1": "شهادة التأسيس",
      "trans.d2": "اللائحة الداخلية",
      "trans.d3": "سياسة تضارب المصالح",
      "trans.pdf": "ملف PDF — يُنشر قريباً",
      "trans.btn": "صفحة الوثائق",

      "cta.title": "كن جزءاً من البداية",
      "cta.p": "انضم إلى مجتمع متنامٍ من الأطباء والباحثين والطلاب الذين يصنعون مستقبل العلوم الطبية.",
      "cta.btn": "قدّم طلب العضوية"
    }
  };

  // دعم اختيار اللغة عبر ?lang=ar في الرابط (مع الحفظ في localStorage)
  let lang = "en";
  try {
    const urlLang = new URLSearchParams(location.search).get("lang");
    if (urlLang === "ar" || urlLang === "en") {
      lang = urlLang;
      localStorage.setItem("ms_lang", lang);
    } else {
      lang = localStorage.getItem("ms_lang") || "en";
    }
  } catch (e) {}

  function d() {
    const page = window.PAGE_I18N || {};
    return Object.assign({}, DICT[lang], page[lang] || {});
  }

  function apply() {
    const t = d();
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = t[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const v = t[el.getAttribute("data-i18n-title")];
      if (v != null) el.setAttribute("title", v);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const v = t[el.getAttribute("data-i18n-ph")];
      if (v != null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-lang-btn]").forEach(b => {
      b.textContent = (lang === "en" ? "عربي" : "English");
      b.setAttribute("aria-label", t["a11y.lang"] || "Toggle language");
    });
    document.querySelectorAll(".hamburger").forEach(h => {
      const open = h.getAttribute("aria-expanded") === "true";
      const label = t[open ? "a11y.menuClose" : "a11y.menuOpen"];
      if (label) h.setAttribute("aria-label", label);
    });
    const toTop = document.querySelector(".to-top");
    if (toTop && t["a11y.top"]) toTop.setAttribute("aria-label", t["a11y.top"]);
    document.querySelectorAll("[data-year]").forEach(el => {
      el.textContent = new Date().getFullYear();
    });
    if (t["meta.title"]) document.title = t["meta.title"];
    const md = document.querySelector('meta[name="description"]');
    if (md && t["meta.desc"]) md.setAttribute("content", t["meta.desc"]);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle && t["meta.title"]) ogTitle.setAttribute("content", t["meta.title"]);
    if (ogDesc && t["meta.desc"]) ogDesc.setAttribute("content", t["meta.desc"]);

    // Pages without a hand-authored canonical still get a stable absolute URL.
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = window.location.origin + window.location.pathname;
      document.head.appendChild(canonical);
    }
  }

  function setLang(l) {
    lang = (l === "ar" ? "ar" : "en");
    try { localStorage.setItem("ms_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");
    apply();
  }

  function toggle() { setLang(lang === "en" ? "ar" : "en"); }

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");

  document.addEventListener("click", e => {
    if (e.target.closest("[data-lang-btn]")) toggle();
  });
  document.addEventListener("site:ready", apply);
  document.addEventListener("DOMContentLoaded", apply);

  return { setLang, toggle, apply, t: key => d()[key], get lang() { return lang; } };
})();