const storageKey = 'portfolio-analytics-consent';
let measurementId;
let configured = false;
let enabled = false;

export function getAnalyticsConsent() {
  try {
    const value = window.localStorage.getItem(storageKey);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export const isAnalyticsEnabled = () => enabled;

export function initializeAnalytics({ id = import.meta.env?.VITE_GA_MEASUREMENT_ID, production = import.meta.env?.PROD } = {}) {
  enabled = Boolean(production && /^G-[A-Z0-9]+$/.test(id || ''));
  measurementId = enabled ? id : undefined;
  if (enabled && getAnalyticsConsent() === 'granted') setAnalyticsConsent('granted');
}

export function setAnalyticsConsent(consent) {
  if (!enabled || !['granted', 'denied'].includes(consent)) return;
  try { window.localStorage.setItem(storageKey, consent); } catch { /* Consent still applies for this page. */ }
  window[`ga-disable-${measurementId}`] = consent !== 'granted';
  if (consent === 'denied') {
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    // Remove analytics cookies previously set on this host or its parent domain.
    const domains = window.location.hostname.split('.');
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.trim().split('=')[0];
      if (!/^_ga(?:_|$)/.test(name)) continue;
      document.cookie = `${name}=; Max-Age=0; path=/`;
      for (let i = 0; i < domains.length - 1; i++) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domains.slice(i).join('.')}`;
      }
    }
    return;
  }
  if (configured) {
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied',
  });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  // Exclude query strings and fragments, which can contain personal information.
  const pageLocation = `${window.location.origin}${window.location.pathname}`;
  let referrer = '';
  try { referrer = new URL(document.referrer).origin; } catch { /* Direct visit. */ }
  window.gtag('config', measurementId, {
    send_page_view: false, allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: pageLocation, page_referrer: referrer,
  });
  window.gtag('event', 'page_view', { page_location: pageLocation, page_referrer: referrer });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  configured = true;
}
