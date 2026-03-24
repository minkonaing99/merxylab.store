import PixelTransition from '../components/PixelTransition';
import { imageMap, toneMap, productsData } from '../data/products';

function formatPlanLabel(label) {
  if (label.includes('(')) {
    return label;
  }

  return label
    .replace(/_/g, ' ')
    .replace(/\bmonths\b/i, 'Months')
    .replace(/\bmonth\b/i, 'Month')
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function normalizePlans(price) {
  if (!price || Array.isArray(price) || Object.keys(price).length === 0) {
    return [{ label: 'Contact', price: 'DM for price' }];
  }

  return Object.entries(price).map(([label, value]) => ({
    label: formatPlanLabel(label),
    price: value,
  }));
}

function getImageSource(photoUrl) {
  const filename = photoUrl?.split('/').pop();
  return imageMap[filename] ?? imageMap['default.jpg'];
}

const services = productsData
  .flatMap((group) => [...group.popular, ...group.other])
  .map((service) => ({
    ...service,
    plans: normalizePlans(service.price),
    imageSrc: getImageSource(service.photo_url),
    tone: toneMap[service.badges?.[0]] ?? 'service-card--blue',
  }));

function ServiceCard({ service, index }) {
  return (
    <article className={`service-card ${service.tone}`} style={{ '--delay': `${index * 90}ms` }}>
      <PixelTransition
        gridSize={14}
        pixelColor="#7c8aa5"
        once={false}
        animationStepDuration={0.35}
        aspectRatio="56%"
        className="service-card__media-transition"
        firstContent={
          <div className="service-card__media">
            <img src={service.imageSrc} alt={service.name} loading="lazy" />
          </div>
        }
        secondContent={
          <div className="service-card__media service-card__media--active">
            <span className="service-card__media-badge">Product Info</span>
            <strong>{service.name}</strong>
            <small>{service.description}</small>
          </div>
        }
      />
      <div className="service-card__body">
        <div className="service-card__meta">
          {(service.badges ?? []).slice(0, 2).map((badge) => (
            <span key={badge} className="service-card__type">
              {badge}
            </span>
          ))}
        </div>
        <h3>{service.name}</h3>

        <div className="service-card__plans">
          {service.plans.map((plan) => (
            <div key={plan.label} className="service-card__plan cursor-target">
              <span>{plan.label}</span>
              <strong>{plan.price}</strong>
            </div>
          ))}
        </div>

      </div>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <header className="section-heading section-heading--split">
        <div>
          <span className="section-kicker">Popular Services</span>
          <h2>Subscription products with flexible duration pricing</h2>
        </div>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
