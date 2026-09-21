# Association of Medical Scopes Website (medicalscopes.org)

Official website of the **Association of Medical Scopes**, an international U.S.-registered nonprofit scientific association advancing medical research, education, and professional collaboration.

> 📅 **Launch roadmap**: Site established late 2026 · First scientific activities & International Conference scheduled for **early 2027**.

## Directory Structure

- `/` : Homepage, global config, and system files.
- `/about/` : Organizational information, mission, board of directors, committees, and legal documents.
- `/membership/` : Membership tiers and online application form.
- `/activities/` : Scientific pillars (Research, Conferences, Workshops, Publications).
- `/events/` : Upcoming conferences (**First International Medical Conference 2027**) and archive.
- `/media/` : News, press releases, photo gallery, and resource libraries.
- `/legal/` : Privacy policy, terms of use, and 501(c)(3) legal disclosures.
- `/thank-you/` : Post-form-submission confirmation page.
- `/assets/` : Centralized CSS, JS components, images, and downloadable PDFs.

## Technical Stack

- **Architecture:** Static Multi-Page Application (MPA) optimized for GitHub Pages / Netlify.
- **Dynamic Injection:** `assets/js/components.js` automatically injects shared headers and footers across all pages.
- **Bilingual i18n:** `assets/js/i18n.js` handles instant English/Arabic switching with RTL layout support.
- **Forms:** `assets/js/forms.js` supports Formspree + mailto fallback.
- **SEO:** `sitemap.xml`, `robots.txt`, per-page `<link rel="canonical">`, and Open Graph tags.

## Maintenance Notes

- **To update the header/footer** across the whole site: edit `assets/js/components.js` only.
- **To add a new translation string:** add it to `DICT` inside `assets/js/i18n.js`, and use `data-i18n="key"` in the HTML.
- **To change the conference year:** update both `i18n.js` (DICT), `events/index.html`, `events/conference-YYYY/index.html`, and `sitemap.xml`.

## Annual Compliance

| Obligation | Deadline | Cost |
|---|---|---|
| Delaware Annual Report | March 1 | ~$25 |
| Registered Agent Renewal (HBS) | Annually | ~$50 |
| IRS Form 990-N | May 15 | Free |
| Domain Renewal | Annually | ~$120 |

## Deployment

**Netlify (recommended):** Drag-and-drop the project folder at [app.netlify.com/drop](https://app.netlify.com/drop), then connect the `medicalscopes.org` domain via Domain Management.

**GitHub Pages:** Push to a repository, enable Pages, and the `CNAME` file will automatically point to `medicalscopes.org`.
