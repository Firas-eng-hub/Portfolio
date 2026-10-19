import profile from '../src/config/profile.js';

export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

export function normalizeSiteUrl(value) {
  if (!value?.trim()) return null;
  const url = new URL(value.trim());
  if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) {
    throw new Error('VITE_SITE_URL must be a public HTTPS URL without credentials, query, or fragment.');
  }
  return `${url.href.replace(/\/+$/, '')}/`;
}

// Deliver the actual profile content in HTML before the interactive React app loads.
export function staticPortfolio() {
  const list = items => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  return `<main class="container mx-auto px-6 py-12 space-y-8">
    <header><h1 class="text-4xl font-bold">${escapeHtml(profile.name)}</h1>
    <p>${escapeHtml(profile.title)}</p><p>${escapeHtml(profile.tagline)}</p></header>
    <section id="about"><h2 class="text-2xl font-bold">About</h2><p>${escapeHtml(profile.bio)}</p><p>${escapeHtml(profile.location)}</p></section>
    <section id="experience"><h2 class="text-2xl font-bold">Experience and projects</h2>${profile.experience.map(project => `<article><h3 class="text-xl font-bold">${escapeHtml(project.title)}</h3><p>${escapeHtml(project.company)} · ${escapeHtml(project.period)}</p><p>${escapeHtml(project.description)}</p>${list(project.highlights)}</article>`).join('')}</section>
    <section id="skills"><h2 class="text-2xl font-bold">Skills</h2>${Object.entries(profile.skills).map(([category, skills]) => `<h3>${escapeHtml(category)}</h3>${list(skills.map(skill => skill.name))}`).join('')}</section>
    <section><h2 class="text-2xl font-bold">Education</h2>${list(profile.education.map(item => `${item.institution}: ${item.degree} (${item.period})`))}</section>
    <section id="achievements"><h2 class="text-2xl font-bold">Achievements</h2>${list(profile.achievements.map(item => `${item.title}: ${item.subtitle}`))}</section>
    <section id="contact"><h2 class="text-2xl font-bold">Contact</h2><a href="mailto:${escapeHtml(profile.email)}">Email ${escapeHtml(profile.name)}</a><p><a href="https://${escapeHtml(profile.github)}">GitHub</a> · <a href="https://${escapeHtml(profile.linkedin)}">LinkedIn</a></p></section>
  </main>`;
}

export function seoPlugin(siteUrl) {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      const tags = [{ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'ProfilePage',
        ...(siteUrl ? { url: siteUrl } : {}),
        mainEntity: {
          '@type': 'Person', name: profile.name, description: profile.bio,
          ...(siteUrl ? { url: siteUrl } : {}),
          sameAs: [`https://${profile.github}`, `https://${profile.linkedin}`],
          knowsAbout: [...new Set(Object.values(profile.skills).flat().map(skill => skill.name))],
        },
      }).replace(/</g, '\\u003c') }];
      if (siteUrl) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: siteUrl } },
          { tag: 'meta', attrs: { property: 'og:url', content: siteUrl } },
          { tag: 'meta', attrs: { property: 'og:image', content: `${siteUrl}social-preview.png` } },
          { tag: 'meta', attrs: { name: 'twitter:image', content: `${siteUrl}social-preview.png` } },
        );
      }
      return { html: html.replace('<div id="root"></div>', `<div id="root">${staticPortfolio()}</div>`), tags };
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${siteUrl}sitemap.xml\n` : ''}` });
      if (siteUrl) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeHtml(siteUrl)}</loc></url></urlset>\n` });
      else this.warn('Set VITE_SITE_URL to the deployed HTTPS URL to generate canonical URLs, social image URLs, and sitemap.xml.');
    },
  };
}
