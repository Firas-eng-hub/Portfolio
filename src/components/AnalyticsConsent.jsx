import { useState } from 'react';
import { getAnalyticsConsent, isAnalyticsEnabled, setAnalyticsConsent } from '../analytics';

export default function AnalyticsConsent() {
  const [open, setOpen] = useState(() => !getAnalyticsConsent());
  if (!isAnalyticsEnabled()) return null;

  const choose = consent => {
    setAnalyticsConsent(consent);
    setOpen(false);
  };
  const buttonStyle = 'rounded-lg border border-metallic-gold px-4 py-2 text-sm text-text-light focus-visible:ring-2 focus-visible:ring-metallic-gold';

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="mt-4 text-sm text-text-muted underline">
        Analytics preferences
      </button>
      {open && (
        <section aria-labelledby="analytics-title" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-xl border border-metallic-gold/40 bg-cosmic-dark p-5 shadow-xl">
          <h2 id="analytics-title" className="font-bold text-text-light">Optional analytics</h2>
          <p className="my-3 text-sm text-text-muted">
            Allow Google Analytics to measure visits using cookies? Analytics starts only if you accept.
            You can change your choice here at any time.{' '}
            <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy</a>
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className={buttonStyle} onClick={() => choose('denied')}>Decline analytics</button>
            <button type="button" className={buttonStyle} onClick={() => choose('granted')}>Allow analytics</button>
          </div>
        </section>
      )}
    </>
  );
}
