const sellers = [
  { name: 'Supreme Human', id: '7,500+ ETH', tone: 'seller-card--violet' },
  { name: 'Nafisa Jewel', id: '5,360+ ETH', tone: 'seller-card--rose' },
  { name: 'Jone Dangello', id: '4,900+ ETH', tone: 'seller-card--blue' },
  { name: 'Sophia Nabila', id: '4,120+ ETH', tone: 'seller-card--pink' },
  { name: 'Alesha Johny', id: '3,860+ ETH', tone: 'seller-card--indigo' },
  { name: 'Jomy Mohan', id: '3,420+ ETH', tone: 'seller-card--violet' },
  { name: 'Marry Joly', id: '3,110+ ETH', tone: 'seller-card--rose' },
  { name: 'Kia Jolie', id: '2,880+ ETH', tone: 'seller-card--blue' },
];

function SellerCard({ seller, rank }) {
  return (
    <article className={`seller-card ${seller.tone}`}>
      <span className="seller-card__rank">{String(rank).padStart(2, '0')}</span>
      <div className="seller-card__avatar" aria-hidden="true" />
      <div className="seller-card__body">
        <h3>{seller.name}</h3>
        <p>{seller.id}</p>
      </div>
    </article>
  );
}

export function TopSellersSection() {
  return (
    <section className="top-sellers-section">
      <header className="section-heading">
        <h2>Top Sellers</h2>
      </header>

      <div className="sellers-grid">
        {sellers.map((seller, index) => (
          <SellerCard key={seller.name} seller={seller} rank={index + 1} />
        ))}
      </div>
    </section>
  );
}
