import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeSiteUrl, seoPlugin, staticPortfolio } from '../scripts/seo.js';

test('canonical URL preserves deployment paths and rejects unsafe configuration', () => {
  assert.equal(normalizeSiteUrl(' https://example.com/portfolio '), 'https://example.com/portfolio/');
  for (const url of ['http://example.com', 'https://example.com/?q=1', 'https://user:pass@example.com', 'https://example.com/#about']) {
    assert.throws(() => normalizeSiteUrl(url));
  }
});

test('SEO output contains crawlable profile, canonical, structured data and sitemap', () => {
  const plugin = seoPlugin('https://example.com/portfolio/');
  const output = plugin.transformIndexHtml('<div id="root"></div>');
  assert.match(output.html, /<h1[^>]*>Mohamed Firas Berriri<\/h1>/);
  assert.match(staticPortfolio(), /Kubernetes cluster deployment/);
  assert.equal(output.tags.find(tag => tag.attrs.rel === 'canonical').attrs.href, 'https://example.com/portfolio/');
  const schema = JSON.parse(output.tags.find(tag => tag.attrs.type === 'application/ld+json').children);
  assert.equal(schema.mainEntity['@type'], 'Person');
  assert.equal(schema.mainEntity.name, 'Mohamed Firas Berriri');
  const files = [];
  plugin.generateBundle.call({ emitFile: file => files.push(file) });
  assert.match(files.find(file => file.fileName === 'robots.txt').source, /Sitemap: https:\/\/example.com\/portfolio\/sitemap.xml/);
  assert.match(files.find(file => file.fileName === 'sitemap.xml').source, /<loc>https:\/\/example.com\/portfolio\/<\/loc>/);
});
