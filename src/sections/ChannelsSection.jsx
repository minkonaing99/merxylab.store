import { ReflectiveCard } from '../components/ReflectiveCard';
import { channels } from '../data/channels';

export function ChannelsSection() {
  return (
    <section className="channels-section" id="channels">
      <header className="section-heading section-heading--split">
        <div>
          <span className="section-kicker">Stay Connected</span>
          <h2>Channels for updates, offers, and customer support</h2>
        </div>
      </header>

      <div className="channels-grid">
        {channels.map((channel, index) => (
          <ReflectiveCard key={channel.title} {...channel} style={{ '--delay': `${index * 150}ms` }} />
        ))}
      </div>
    </section>
  );
}
