const plans = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/month',
    features: ['1 product page', 'Basic analytics', 'Email capture'],
  },
  {
    name: 'Pro',
    price: '$24',
    cadence: '/month',
    featured: true,
    features: ['Unlimited sections', 'A/B-ready pricing blocks', 'Advanced customization'],
  },
  {
    name: 'Scale',
    price: '$79',
    cadence: '/month',
    features: ['Team access', 'Priority support', 'Multiple product funnels'],
  },
];

function PricingCard({ plan }) {
  return (
    <article className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}>
      {plan.featured ? <span className="pricing-card__badge">Most Popular</span> : null}
      <h3>{plan.name}</h3>
      <div className="pricing-card__price">
        <strong>{plan.price}</strong>
        <span>{plan.cadence}</span>
      </div>
      <ul className="pricing-card__list">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <button type="button" className="pricing-card__button">
        Choose Plan
      </button>
    </article>
  );
}

export function PricingSection() {
  return (
    <section className="pricing-section">
      <header className="section-heading">
        <div>
          <span className="section-kicker">Pricing</span>
          <h2>Simple plans for digital subscriptions</h2>
        </div>
      </header>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
