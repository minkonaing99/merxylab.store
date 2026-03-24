export function ValueSection() {
  return (
    <section className="value-section" id="why-buy">
      <header className="section-heading section-heading--split">
        <div>
          <span className="section-kicker">Why People Buy</span>
          <h2>Trust-driven sections that support the products</h2>
        </div>
      </header>

      <div className="value-grid">
        <article className="value-card" style={{ '--delay': '0ms' }}>
          <span className="value-card__orb" />
          <h3>Why customers trust MerxyLab</h3>
          <p>
            We keep <strong className="value-card__highlight">pricing clear</strong>,{' '}
            <strong className="value-card__highlight">support easy to reach</strong>, and{' '}
            <strong className="value-card__highlight">delivery structured</strong> so every
            service feels reliable instead of random. Customers can{' '}
            <strong className="value-card__highlight">check plans quickly</strong>,{' '}
            <strong className="value-card__highlight">compare durations</strong>, and{' '}
            <strong className="value-card__highlight">contact the right channel</strong>{' '}
            without confusion.
          </p>
        </article>
      </div>
    </section>
  );
}
