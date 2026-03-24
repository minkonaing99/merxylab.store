import PixelTransition from './PixelTransition';

const imageMap = {
  'spotify.jpg': new URL('../../productImages/spotify.jpg', import.meta.url).href,
  'chatgpt.jpg': new URL('../../productImages/chatgpt.jpg', import.meta.url).href,
  'telegram-premium.jpg': new URL('../../productImages/telegram-premium.jpg', import.meta.url).href,
  'youtube.jpg': new URL('../../productImages/youtube.jpg', import.meta.url).href,
  'netflix.jpg': new URL('../../productImages/netflix.jpg', import.meta.url).href,
  'capcut.jpg': new URL('../../productImages/capcut.jpg', import.meta.url).href,
  'duolingo.jpg': new URL('../../productImages/duolingo.jpg', import.meta.url).href,
  'zoompro.jpg': new URL('../../productImages/zoompro.jpg', import.meta.url).href,
  'geminipro.jpg': new URL('../../productImages/geminipro.jpg', import.meta.url).href,
  'gemini.jpg': new URL('../../productImages/gemini.jpg', import.meta.url).href,
  'canva.jpg': new URL('../../productImages/canva.jpg', import.meta.url).href,
  'vpn.jpg': new URL('../../productImages/vpn.jpg', import.meta.url).href,
  'default.jpg': new URL('../../productImages/default.jpg', import.meta.url).href,
};

const toneMap = {
  Spotify: 'service-card--green',
  ChatGPT: 'service-card--blue',
  Telegram: 'service-card--blue',
  YouTube: 'service-card--pink',
  Netflix: 'service-card--red',
  CapCut: 'service-card--violet',
  Duolingo: 'service-card--green',
  Zoom: 'service-card--blue',
  Gemini: 'service-card--amber',
  Canva: 'service-card--violet',
  VPN: 'service-card--amber',
};

const productsData = [
  {
    popular: [
      {
        name: 'Spotify Individual',
        badges: ['Spotify', 'Individual'],
        price: {
          '1_month': 'Ks 15,500',
          '3_months': 'Ks 39,500',
          '6_months': 'Ks 75,000',
          '12_months': 'Ks 150,000',
        },
        description: 'Official individual plan with private personal access, ad-free listening, and offline downloads.',
        photo_url: 'images/services/spotify.jpg',
      },
      {
        name: 'Spotify Family',
        badges: ['Spotify', 'Family'],
        price: {
          '1_month': 'Ks 8,500',
        },
        description: 'Official family plan with shared access, ad-free listening, and offline downloads.',
        photo_url: 'images/services/spotify.jpg',
      },
      {
        name: 'ChatGPT Plus Individual',
        badges: ['ChatGPT', 'Individual'],
        price: {
          '1_month': 'MMK 70,000',
        },
        description: 'Individual ChatGPT Plus plan for personal use with fast access to premium models.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'Telegram Premium',
        badges: ['Telegram', 'Updated Price'],
        price: {
          '3_months': 'MMK 64,000',
          '6_months': 'MMK 99,000',
          '12_months': 'MMK 159,000',
        },
        description: 'Premium Telegram features with faster downloads, extra upload limits, and premium reactions.',
        photo_url: 'images/services/telegram-premium.jpg',
      },
      {
        name: 'YouTube Premium Family',
        badges: ['YouTube', 'Family'],
        price: {
          '3_months': 'MMK 40,000',
          '6_months': 'MMK 75,000',
          '12_months': 'MMK 145,000',
        },
        description: 'Family access for YouTube Premium and YouTube Music with ad-free playback and downloads.',
        photo_url: 'images/services/youtube.jpg',
      },
      {
        name: 'Netflix Premium 4K',
        badges: ['Netflix', 'Myanmar Region'],
        price: {
          '1_month': 'MMK 16,000',
          '3_months': 'MMK 45,500',
          '6_months': 'MMK 89,500',
          '12_months': 'MMK 155,000',
        },
        description: 'Netflix Premium 4K plan with Myanmar region pricing and optional TV support add-on.',
        photo_url: 'images/services/netflix.jpg',
      },
    ],
    other: [
      {
        name: 'CapCut Pro Budget',
        badges: ['CapCut', 'Budget'],
        price: {
          '1_month': 'Ks 15,000',
          '12_months': 'Ks 140,000',
        },
        description: 'Budget-friendly CapCut Pro with private access and support for up to three devices.',
        photo_url: 'images/services/capcut.jpg',
      },
      {
        name: 'CapCut Pro Official',
        badges: ['CapCut', 'Official'],
        price: {
          '1_month': 'Ks 45,000',
          '12_months': 'Ks 360,000',
        },
        description: 'Official individual CapCut Pro plan with owned mail and private access.',
        photo_url: 'images/services/capcut.jpg',
      },
      {
        name: 'Netflix Premium Thailand',
        badges: ['Netflix', 'Thai Region'],
        price: {
          '1_month': 'MMK 18,000',
        },
        description: 'Thailand region Netflix Premium pricing with extra TV support available.',
        photo_url: 'images/services/netflix.jpg',
      },
      {
        name: 'Netflix Premium Other Regions',
        badges: ['Netflix', 'Other Regions'],
        price: {
          '1_month': 'MMK 19,500',
        },
        description: 'Netflix Premium pricing for non-Myanmar and non-Thai regions.',
        photo_url: 'images/services/netflix.jpg',
      },
      {
        name: 'Spotify Duo',
        badges: ['Spotify', 'Duo'],
        price: {
          '1_month': 'Ks 32,000',
          '3_months': 'Ks 66,000',
          '6_months': 'Ks 119,000',
          '12_months': 'Ks 229,000',
        },
        description: 'Spotify Duo plan designed for two people on one premium setup.',
        photo_url: 'images/services/spotify.jpg',
      },
      {
        name: 'Spotify Platinum Premium',
        badges: ['Spotify', 'Platinum'],
        price: {
          '1_month': 'Ks 35,000',
        },
        description: 'Single-month Spotify Platinum option for customers who want a higher-tier setup.',
        photo_url: 'images/services/spotify.jpg',
      },
      {
        name: 'ChatGPT Pro Private',
        badges: ['ChatGPT', 'Private'],
        price: {
          '1_month': 'MMK 29,000',
          '2_months': 'MMK 58,000',
        },
        description: 'Private ChatGPT Pro plan with owned mail for personal access.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'ChatGPT Pro Share 1 Device',
        badges: ['ChatGPT', 'Shared'],
        price: {
          '1_month': 'MMK 12,000',
          '2_months': 'MMK 24,000',
        },
        description: 'Shared ChatGPT Pro plan for one device at a lower entry price.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'ChatGPT Pro Share 2 Devices',
        badges: ['ChatGPT', 'Shared'],
        price: {
          '1_month': 'MMK 18,000',
          '2_months': 'MMK 36,000',
        },
        description: 'Shared ChatGPT Pro plan for two devices with budget-friendly access.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'Duolingo Super',
        badges: ['Duolingo', 'Super'],
        price: {
          '1_month': 'MMK 6,000',
          '3_months': 'MMK 18,000',
          '6_months': 'MMK 35,000',
          '12_months': 'MMK 70,000',
        },
        description: 'Duolingo Super with ad-free learning, unlimited hearts, and long-term options.',
        photo_url: 'images/services/duolingo.jpg',
      },
      {
        name: 'Duolingo Max',
        badges: ['Duolingo', 'Max'],
        price: {
          '1_month': 'MMK 12,000',
          '3_months': 'MMK 35,000',
          '6_months': 'MMK 65,000',
          '12_months': 'MMK 125,000',
        },
        description: 'Duolingo Max with AI-assisted language learning and enhanced premium tools.',
        photo_url: 'images/services/duolingo.jpg',
      },
      {
        name: 'Zoom Pro',
        badges: ['Zoom', 'Pro'],
        price: {
          '1_month': 'Ks 2*,***',
          '3_months': 'Ks 6*,***',
          '6_months': 'Ks 12*,***',
          '12_months': 'Ks 24*,***',
        },
        description: 'Zoom Pro with gift periods on longer plans and private setup.',
        photo_url: 'images/services/zoompro.jpg',
      },
      {
        name: 'Zoom Family Plan',
        badges: ['Zoom', 'Family'],
        price: {
          '1_month': 'MMK 8,500',
          '2_months': 'MMK 11,500',
          '3_months': 'MMK 16,500',
          '6_months': 'MMK 31,000',
        },
        description: 'Family-plan Zoom access with flexible short and medium-term options.',
        photo_url: 'images/services/zoompro.jpg',
      },
      {
        name: 'Gemini Pro',
        badges: ['Gemini', 'Pro'],
        price: {
          '3_months': 'MMK 35,000',
          '6_months': 'MMK 75,000',
          '12_months': 'MMK 130,000',
        },
        description: 'Gemini Pro plans with different warranty levels depending on the package selected.',
        photo_url: 'images/services/geminipro.jpg',
      },
      {
        name: 'Gemini Ultra',
        badges: ['Gemini', 'Ultra'],
        price: [],
        description: 'Gemini Ultra is available by inquiry for both short and long durations.',
        photo_url: 'images/services/gemini.jpg',
      },
      {
        name: 'Canva Edu Pro',
        badges: ['Canva', 'Edu'],
        price: {
          '12_months': 'MMK 15,000',
        },
        description: 'Annual Canva Edu Pro plan at education pricing.',
        photo_url: 'images/services/canva.jpg',
      },
      {
        name: 'Canva Pro',
        badges: ['Canva', 'Pro'],
        price: {
          '1_month': 'MMK 15,000',
          '12_months': 'MMK 125,000',
        },
        description: 'Standard Canva Pro subscription with both monthly and yearly options.',
        photo_url: 'images/services/canva.jpg',
      },
      {
        name: 'Canva Business Pro',
        badges: ['Canva', 'Business'],
        price: {
          '3_months': 'MMK 75,000',
        },
        description: 'Business Canva package for teams that need a short-term premium plan.',
        photo_url: 'images/services/canva.jpg',
      },
      {
        name: 'Express VPN',
        badges: ['VPN', '1 Device'],
        price: {
          '1_month': 'MMK 6,000',
          '3_months': 'MMK 15,000',
        },
        description: 'Express VPN pricing for a single-device setup.',
        photo_url: 'images/services/vpn.jpg',
      },
      {
        name: 'Outline VPN Taiwan',
        badges: ['VPN', 'Taiwan Region'],
        price: {
          '1 M (150Gb)': 'MMK 7,500',
        },
        description: 'Outline VPN package for Taiwan region access with a 150 GB monthly quota.',
        photo_url: 'images/services/vpn.jpg',
      },
      {
        name: 'V2Box Singapore',
        badges: ['VPN', 'Singapore Region'],
        price: {
          '1 M (100Gb)': 'MMK 9,000',
          '1 M (200Gb)': 'MMK 16,500',
        },
        description: 'Singapore-region V2Box options for flexible monthly data allocations.',
        photo_url: 'images/services/vpn.jpg',
      },
    ],
  },
];

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

const services = productsData.flatMap((group) => [...group.popular, ...group.other]).map((service) => ({
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
            <img src={service.imageSrc} alt={service.name} />
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
