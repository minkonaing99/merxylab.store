const logos = ['Notion', 'Stripe', 'Linear', 'Framer', 'Vercel', 'Shopify'];

export function TrustSection() {
  return (
    <section className="trust-section">
      <p className="trust-section__label">Trusted by fast-growing digital teams</p>
      <div className="trust-section__row">
        {logos.map((logo) => (
          <span key={logo} className="trust-section__item">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
