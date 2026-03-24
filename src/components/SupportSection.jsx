import PixelTransition from './PixelTransition';

const admins = [
  {
    title: 'Main Facebook Page',
    role: 'Official storefront page',
    actions: ['Visit Page', 'Open Messenger'],
  },
  {
    title: 'Admin Lynn',
    role: 'Telegram and Facebook support',
    actions: ['Chat on Telegram', 'Open Facebook'],
  },
  {
    title: 'Support Admin',
    role: 'Viber and Line contact',
    actions: ['Open Viber', 'Open Line'],
  },
];

function SupportCard({ admin, index }) {
  return (
    <article className="support-card" style={{ '--delay': `${index * 110}ms` }}>
      <PixelTransition
        gridSize={18}
        pixelColor="#7c8aa5"
        once={false}
        animationStepDuration={0.4}
        aspectRatio="74%"
        className="support-card__photo-transition"
        firstContent={
          <div className="support-card__photo support-card__photo--default">
            Photo Placeholder
          </div>
        }
        secondContent={
          <div className="support-card__photo support-card__photo--active">
            <span className="support-card__photo-badge">Admin Contact</span>
            <strong>{admin.title}</strong>
            <small>Replace with real admin photo later</small>
          </div>
        }
      />
      <h3>{admin.title}</h3>
      <p>{admin.role}</p>
      <div className="support-card__actions">
        {admin.actions.map((action) => (
          <button key={action} type="button" className="button button--ghost support-card__button">
            {action}
          </button>
        ))}
      </div>
    </article>
  );
}

export function SupportSection() {
  return (
    <section className="support-section" id="support">
      <header className="section-heading">
        <div>
          <span className="section-kicker">Contact Our Admins</span>
          <h2>Direct support blocks that feel built into the storefront</h2>
        </div>
      </header>

      <div className="support-grid">
        {admins.map((admin, index) => (
          <SupportCard key={admin.title} admin={admin} index={index} />
        ))}
      </div>
    </section>
  );
}
