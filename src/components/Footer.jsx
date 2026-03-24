const footerColumns = [
  {
    title: 'Browse',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Why Buy', href: '#why-buy' },
      { label: 'Channels', href: '#channels' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'Streaming', href: '#services' },
      { label: 'AI Tools', href: '#services' },
      { label: 'Music', href: '#services' },
      { label: 'Productivity', href: '#services' },
    ],
  },
];

function FooterColumn({ title, links }) {
  return (
    <div className="footer__column">
      <h3>{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__brand">
        <span className="footer__brand-mark" aria-hidden="true" />
        <div>
          <strong>MerxyLab</strong>
          <p>Premium digital subscriptions with cleaner offers, faster contact, and direct channel access.</p>
          <a href="#top">Back to top</a>
        </div>
      </div>

      <div className="footer__columns">
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links} />
        ))}
      </div>
    </footer>
  );
}
