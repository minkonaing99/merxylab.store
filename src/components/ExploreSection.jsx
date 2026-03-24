const artworks = [
  { title: 'Abstract', tone: 'art-card--violet' },
  { title: 'Craft', tone: 'art-card--sky' },
  { title: 'Nature Art', tone: 'art-card--sunset' },
  { title: 'Game', tone: 'art-card--pink' },
  { title: 'Photography', tone: 'art-card--aqua' },
  { title: 'Metaverse', tone: 'art-card--amber' },
];

function ArtCard({ item }) {
  return (
    <article className={`art-card ${item.tone}`}>
      <div className="art-card__mosaic">
        <span className="art-card__tile art-card__tile--large" />
        <span className="art-card__tile" />
        <span className="art-card__tile" />
        <span className="art-card__tile art-card__tile--wide" />
      </div>
      <div className="art-card__body">
        <h3>{item.title}</h3>
      </div>
    </article>
  );
}

export function ExploreSection() {
  return (
    <section className="explore-section">
      <header className="section-heading">
        <h2>Explore Artworks</h2>
      </header>

      <div className="art-grid">
        {artworks.map((item) => (
          <ArtCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
