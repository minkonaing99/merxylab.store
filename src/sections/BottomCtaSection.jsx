export function BottomCtaSection() {
  return (
    <section className="bottom-cta">
      <div className="bottom-cta__panel">
        <div className="bottom-cta__pulse bottom-cta__pulse--left" />
        <div className="bottom-cta__pulse bottom-cta__pulse--right" />
        <div className="bottom-cta__content">
          <span className="section-kicker">Ready To Order</span>
          <h2>Get your premium subscription with fast support and direct access</h2>
          <p>
            Browse the services, choose the plan that fits, and contact us through
            Telegram, Facebook, or Messenger for quick ordering.
          </p>
          <div className="bottom-cta__actions">
            <a
              href="https://t.me/merxylabstore"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary button--large"
            >
              Order via Telegram
            </a>
            <a
              href="https://m.me/merxylabstore"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--ghost button--large"
            >
              Message on Messenger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
