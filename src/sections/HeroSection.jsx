import DomeGallery from '../components/DomeGallery';
import SplitText from '../components/SplitText';

const highlights = [
  { value: 'Best Prices', label: 'competitive premium deals' },
  { value: '24/7 Support', label: 'admins ready to help' },
  { value: 'Instant Access', label: 'fast delivery after payment' },
];

function HighlightCards() {
  return (
    <div className="hero__highlights">
      {highlights.map((item, index) => (
        <article key={item.value} className="hero__highlight-card" style={{ '--delay': `${index * 120}ms` }}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}

function PreviewPanel() {
  return (
    <div className="hero__preview">
      <div className="hero__preview-main">
        <div className="hero__preview-header">
          <span />
          <span />
          <span />
        </div>
        <div className="hero__preview-video">
          <DomeGallery
            fit={1.06}
            fitBasis="max"
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={20}
            grayscale={false}
            padFactor={0.05}
            openedImageWidth="320px"
            openedImageHeight="320px"
          />
        </div>
      </div>

      <div className="hero__preview-floating hero__preview-floating--a">
        <span className="hero__preview-label">Top Seller</span>
        <strong>ChatGPT Plus</strong>
      </div>

      <div className="hero__preview-floating hero__preview-floating--b">
        <span className="hero__preview-label">Fast Support</span>
        <strong>Messenger + Telegram</strong>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="section-kicker">Premium Digital Store</span>
        <h1 className="hero__title">
          Buy Premium
          <br />
          Digital Services
          <br />
          Without{' '}
          <SplitText
            text="Overpaying"
            className="hero__title-accent"
            delay={130}
            duration={1.9}
            ease="power3.out"
            from={{ opacity: 0, y: 26 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
            tag="span"
            startDelay={2}
          />
        </h1>
        <p className="hero__description">
          Streaming, AI, productivity, and design subscriptions in one storefront.
          Clean offers, direct support, and polished service presentation.
        </p>

        <div className="hero__actions">
          <a href="#services" className="button button--primary button--large">
            Browse Services
          </a>
          <a href="#channels" className="button button--ghost button--large">
            Talk to Admin
          </a>
        </div>

        <HighlightCards />
      </div>

      <PreviewPanel />
    </section>
  );
}
