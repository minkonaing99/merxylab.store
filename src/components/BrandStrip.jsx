const brands = ['coinbase', 'BINANCE', 'Revolut', 'BITMEX', 'BITFINEX', 'Blockchain'];

export function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Partner brands">
      <div className="brand-strip__rail">
        {brands.map((brand) => (
          <span key={brand} className="brand-strip__item">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
