const values = [
  {
    title: 'Best Price Positioning',
    description: 'Lead with value clearly so every service card feels like a good deal, not a random listing.',
  },
  {
    title: 'Support You Can Reach Fast',
    description: 'Make admin and messenger access obvious, because trust is a key part of this business model.',
  },
  {
    title: 'Delivery That Feels Reliable',
    description: 'Use instant-delivery messaging, order steps, and clean product detail blocks to reduce hesitation.',
  },
];

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
        {values.map((value, index) => (
          <article key={value.title} className="value-card" style={{ '--delay': `${index * 140}ms` }}>
            <span className="value-card__orb" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
