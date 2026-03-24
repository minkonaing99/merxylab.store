import { useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Channels', href: '#channels' },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__core" />
      <span className="brand-mark__spark brand-mark__spark--one" />
      <span className="brand-mark__spark brand-mark__spark--two" />
    </span>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <ul className="navbar__links" aria-label="Primary">
      {navItems.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            onClick={(event) => {
              onNavigate?.();
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`navbar ${isMenuOpen ? 'navbar--menu-open' : ''}`}>
      <div className="navbar__shell">
        <a href="#top" className="navbar__brand">
          <BrandMark />
          <span className="navbar__brand-text">
            <span className="navbar__brand-main">MerxyLab</span>
            <span className="navbar__brand-sub">Premium digital subscriptions</span>
          </span>
        </a>

        <button
          type="button"
          className="navbar__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="navbar__content" id="primary-navigation">
          <div className="navbar__group">
            <nav className="navbar__nav">
              <NavLinks onNavigate={() => setIsMenuOpen(false)} />
            </nav>

            <div className="navbar__actions">
              <a href="#channels" className="navbar__secondary-link">
                Contact Admin
              </a>
              <a href="#services" className="button button--primary navbar__cta">
                Explore Offers
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
