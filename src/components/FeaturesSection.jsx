const features = [
  {
    title: 'One focused conversion path',
    description: 'Lead visitors from value to pricing without clutter or mixed messaging.',
  },
  {
    title: 'Subscription-first pricing blocks',
    description: 'Show monthly and yearly plans with a clear recommended tier.',
  },
  {
    title: 'Real product proof',
    description: 'Use screenshots, launch stats, and testimonials exactly where trust matters.',
  },
];

export function FeaturesSection() {
  return (
    <section className="features-section">
      <header className="section-heading section-heading--split">
        <div>
          <span className="section-kicker">Why it converts</span>
          <h2>Designed like a premium software landing page</h2>
        </div>
        <p>
          Cleaner hierarchy, stronger calls to action, and less visual noise so the
          user understands the product and the value fast.
        </p>
      </header>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article key={feature.title} className="feature-card" style={{ '--delay': `${index * 120}ms` }}>
            <span className="feature-card__icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
