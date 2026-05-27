import { footerColumns } from '../data/navigation';
import logo from '../../images/merxylab_logo.png';

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
        <img src={logo} alt="MerxyLab logo" className="footer__brand-mark" width="38" height="38" />
        <div>
          <strong>MerxyLab</strong>
          <p>Premium digital subscriptions.</p>
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
