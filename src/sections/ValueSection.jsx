const trustPoints = [
  {
    stat: 'MMK / Ks',
    label: 'Priced for Myanmar',
    detail: 'Every service listed in local currency at rates far below what you\'d pay buying direct from the platform.',
    size: 'featured',
  },
  {
    stat: '< 5 min',
    label: 'Replies in minutes',
    detail: 'Admins are live on Telegram and Messenger every day.',
  },
  {
    stat: 'Same day',
    label: 'Instant delivery',
    detail: 'Activated and handed over the moment payment clears.',
  },
  {
    label: 'No hidden fees',
    detail: 'The price on each card is what you pay. No add-ons, no surprises.',
  },
  {
    label: 'Flexible durations',
    detail: '1, 3, 6, or 12-month plans on most products — pay only for as long as you need.',
  },
  {
    label: '10+ services, one storefront',
    detail: 'Netflix, Spotify, ChatGPT, Canva, YouTube, Duolingo, VPN — no need to hunt across multiple resellers.',
    size: 'full',
  },
];

export function ValueSection() {
  return (
    <section className="value-section" id="why-buy">
      <header className="section-heading section-heading--split">
        <div>
          <span className="section-kicker">Why People Buy</span>
          <h2>Six reasons customers keep coming back</h2>
        </div>
      </header>

      <div className="value-grid">
        {trustPoints.map((point, index) => (
          <article
            key={point.label}
            className={`value-card${point.size ? ` value-card--${point.size}` : ''}`}
            style={{ '--delay': `${index * 80}ms` }}
          >
            <span className="value-card__orb" />
            {point.stat && <p className="value-card__stat">{point.stat}</p>}
            <h3>{point.label}</h3>
            <p>{point.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
