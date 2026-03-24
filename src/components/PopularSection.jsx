const popularItems = [
  {
    title: 'Cyber Woman',
    artist: 'Jone Doe',
    tone: 'popular-card--pink',
  },
  {
    title: 'Digital Resistance',
    artist: 'Linda',
    tone: 'popular-card--violet',
    featured: true,
  },
  {
    title: 'Neon Bloom',
    artist: 'Nina',
    tone: 'popular-card--rose',
  },
  {
    title: 'Crystal Mind',
    artist: 'Mia',
    tone: 'popular-card--ice',
  },
];

function PopularCard({ item }) {
  return (
    <article className={`popular-card ${item.tone} ${item.featured ? 'popular-card--featured' : ''}`}>
      <div className="popular-card__art">
        <div className="popular-card__glow" />
        <div className="popular-card__shape popular-card__shape--primary" />
        <div className="popular-card__shape popular-card__shape--secondary" />
      </div>
      <div className="popular-card__body">
        <h3>{item.title}</h3>
        <p>{item.artist}</p>
      </div>
    </article>
  );
}

export function PopularSection() {
  return (
    <section className="popular-section">
      <header className="section-heading">
        <h2>Popular this week</h2>
      </header>

      <div className="popular-grid">
        {popularItems.map((item) => (
          <PopularCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
