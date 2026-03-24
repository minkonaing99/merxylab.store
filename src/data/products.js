export const imageMap = {
  'spotify.jpg': new URL('../../images/spotify.jpg', import.meta.url).href,
  'chatgpt.jpg': new URL('../../images/chatgpt.jpg', import.meta.url).href,
  'telegram-premium.jpg': new URL('../../images/telegram-premium.jpg', import.meta.url).href,
  'youtube.jpg': new URL('../../images/youtube.jpg', import.meta.url).href,
  'netflix.jpg': new URL('../../images/netflix.jpg', import.meta.url).href,
  'capcut.jpg': new URL('../../images/capcut.jpg', import.meta.url).href,
  'duolingo.jpg': new URL('../../images/duolingo.jpg', import.meta.url).href,
  'zoompro.jpg': new URL('../../images/microsoft365.jpg', import.meta.url).href,
  'geminipro.jpg': new URL('../../images/gemini.jpg', import.meta.url).href,
  'gemini.jpg': new URL('../../images/gemini.jpg', import.meta.url).href,
  'canva.jpg': new URL('../../images/canva.jpg', import.meta.url).href,
  'vpn.jpg': new URL('../../images/express.jpg', import.meta.url).href,
  'default.jpg': new URL('../../images/discord.jpg', import.meta.url).href,
};

export const toneMap = {
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

export const productsData = [
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
          '1_month': 'Ks 70,000',
        },
        description: 'Individual ChatGPT Plus plan for personal use with fast access to premium models.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'Telegram Premium',
        badges: ['Telegram', 'Updated Price'],
        price: {
          '3_months': 'Ks 64,000',
          '6_months': 'Ks 99,000',
          '12_months': 'Ks 159,000',
        },
        description: 'Premium Telegram features with faster downloads, extra upload limits, and premium reactions.',
        photo_url: 'images/services/telegram-premium.jpg',
      },
      {
        name: 'YouTube Premium Family',
        badges: ['YouTube', 'Family'],
        price: {
          '3_months': 'Ks 40,000',
          '6_months': 'Ks 75,000',
          '12_months': 'Ks 145,000',
        },
        description: 'Family access for YouTube Premium and YouTube Music with ad-free playback and downloads.',
        photo_url: 'images/services/youtube.jpg',
      },
      {
        name: 'Netflix Premium 4K',
        badges: ['Netflix', 'Myanmar Region'],
        price: {
          '1_month': 'Ks 16,000',
          '3_months': 'Ks 45,500',
          '6_months': 'Ks 89,500',
          '12_months': 'Ks 155,000',
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
          '1_month': 'Ks 18,000',
        },
        description: 'Thailand region Netflix Premium pricing with extra TV support available.',
        photo_url: 'images/services/netflix.jpg',
      },
      {
        name: 'Netflix Premium Other Regions',
        badges: ['Netflix', 'Other Regions'],
        price: {
          '1_month': 'Ks 19,500',
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
          '1_month': 'Ks 29,000',
          '2_months': 'Ks 58,000',
        },
        description: 'Private ChatGPT Pro plan with owned mail for personal access.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'ChatGPT Pro Share 1 Device',
        badges: ['ChatGPT', 'Shared'],
        price: {
          '1_month': 'Ks 12,000',
          '2_months': 'Ks 24,000',
        },
        description: 'Shared ChatGPT Pro plan for one device at a lower entry price.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'ChatGPT Pro Share 2 Devices',
        badges: ['ChatGPT', 'Shared'],
        price: {
          '1_month': 'Ks 18,000',
          '2_months': 'Ks 36,000',
        },
        description: 'Shared ChatGPT Pro plan for two devices with budget-friendly access.',
        photo_url: 'images/services/chatgpt.jpg',
      },
      {
        name: 'Duolingo Super',
        badges: ['Duolingo', 'Super'],
        price: {
          '1_month': 'Ks 6,000',
          '3_months': 'Ks 18,000',
          '6_months': 'Ks 35,000',
          '12_months': 'Ks 70,000',
        },
        description: 'Duolingo Super with ad-free learning, unlimited hearts, and long-term options.',
        photo_url: 'images/services/duolingo.jpg',
      },
      {
        name: 'Duolingo Max',
        badges: ['Duolingo', 'Max'],
        price: {
          '1_month': 'Ks 12,000',
          '3_months': 'Ks 35,000',
          '6_months': 'Ks 65,000',
          '12_months': 'Ks 125,000',
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
          '1_month': 'Ks 8,500',
          '2_months': 'Ks 11,500',
          '3_months': 'Ks 16,500',
          '6_months': 'Ks 31,000',
        },
        description: 'Family-plan Zoom access with flexible short and medium-term options.',
        photo_url: 'images/services/zoompro.jpg',
      },
      {
        name: 'Gemini Pro',
        badges: ['Gemini', 'Pro'],
        price: {
          '3_months': 'Ks 35,000',
          '6_months': 'Ks 75,000',
          '12_months': 'Ks 130,000',
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
          '12_months': 'Ks 15,000',
        },
        description: 'Annual Canva Edu Pro plan at education pricing.',
        photo_url: 'images/services/canva.jpg',
      },
      {
        name: 'Canva Pro',
        badges: ['Canva', 'Pro'],
        price: {
          '1_month': 'Ks 15,000',
          '12_months': 'Ks 125,000',
        },
        description: 'Standard Canva Pro subscription with both monthly and yearly options.',
        photo_url: 'images/services/canva.jpg',
      },
      {
        name: 'Canva Business Pro',
        badges: ['Canva', 'Business'],
        price: {
          '3_months': 'Ks 75,000',
        },
        description: 'Business Canva package for teams that need a short-term premium plan.',
        photo_url: 'images/services/canva.jpg',
      },
      {
        name: 'Express VPN',
        badges: ['VPN', '1 Device'],
        price: {
          '1_month': 'Ks 6,000',
          '3_months': 'Ks 15,000',
        },
        description: 'Express VPN pricing for a single-device setup.',
        photo_url: 'images/services/vpn.jpg',
      },
      {
        name: 'Outline VPN Taiwan',
        badges: ['VPN', 'Taiwan Region'],
        price: {
          '1 M (150Gb)': 'Ks 7,500',
        },
        description: 'Outline VPN package for Taiwan region access with a 150 GB monthly quota.',
        photo_url: 'images/services/vpn.jpg',
      },
      {
        name: 'V2Box Singapore',
        badges: ['VPN', 'Singapore Region'],
        price: {
          '1 M (100Gb)': 'Ks 9,000',
          '1 M (200Gb)': 'Ks 16,500',
        },
        description: 'Singapore-region V2Box options for flexible monthly data allocations.',
        photo_url: 'images/services/vpn.jpg',
      },
    ],
  },
];
