import test from 'node:test';
import assert from 'node:assert/strict';

async function setup() {
  const storage = new Map();
  const scripts = [];
  globalThis.window = {
    localStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) },
    location: { origin: 'https://portfolio.example', pathname: '/', hostname: 'portfolio.example' },
  };
  globalThis.document = {
    cookie: '', referrer: 'https://search.example/?private=value',
    head: { appendChild: element => scripts.push(element) }, createElement: () => ({}),
  };
  const analytics = await import(`../src/analytics.js?test=${Math.random()}`);
  return { ...analytics, scripts, storage };
}

test('analytics requires production, a valid ID, and explicit opt-in', async () => {
  const a = await setup();
  a.initializeAnalytics({ id: 'G-TEST123', production: false });
  a.setAnalyticsConsent('granted');
  assert.equal(a.scripts.length, 0);
  a.initializeAnalytics({ id: 'invalid', production: true });
  assert.equal(a.isAnalyticsEnabled(), false);
  a.initializeAnalytics({ id: 'G-TEST123', production: true });
  assert.equal(a.scripts.length, 0);
  a.setAnalyticsConsent('denied');
  assert.equal(a.scripts.length, 0);
  a.setAnalyticsConsent('granted');
  a.setAnalyticsConsent('granted');
  assert.equal(a.scripts.length, 1);
  const events = window.dataLayer.map(item => [...item]);
  assert.equal(events.filter(item => item[0] === 'event' && item[1] === 'page_view').length, 1);
  assert.equal(events.find(item => item[0] === 'event')[2].page_referrer, 'https://search.example');
  a.setAnalyticsConsent('denied');
  assert.equal(window['ga-disable-G-TEST123'], true);
  assert.equal(a.getAnalyticsConsent(), 'denied');
});

test('return visits honor saved consent; unavailable storage defaults to no tracking', async () => {
  const a = await setup();
  a.storage.set('portfolio-analytics-consent', 'granted');
  a.initializeAnalytics({ id: 'G-TEST123', production: true });
  assert.equal(a.scripts.length, 1);
  const b = await setup();
  window.localStorage.getItem = () => { throw new Error('blocked'); };
  b.initializeAnalytics({ id: 'G-TEST123', production: true });
  assert.equal(b.scripts.length, 0);
});
