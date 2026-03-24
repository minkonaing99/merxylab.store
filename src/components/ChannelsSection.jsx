import { ReflectiveCard } from './ReflectiveCard';
import mainChannelVideo from '../../moving_card/animatedman.mp4';
import supportChannelVideo from '../../moving_card/animatefemale.mp4';

const channels = [
  {
    eyebrow: 'Main Telegram',
    title: 'MerxyLab Main',
    copy: 'Use this for price updates, promo drops, and new service announcements.',
    buttonLabel: 'Add Main Link',
    handle: '@merxylabstore',
    videoSrc: mainChannelVideo,
    accent: 'blue',
  },
  {
    eyebrow: 'Main Facebook',
    title: 'MerxyLab Store',
    copy: 'Use this for storefront posts, messenger contact, and direct Facebook updates.',
    buttonLabel: 'Add Facebook Link',
    handle: 'Facebook Link',
    roleLabel: 'Main Facebook',
    handleLabel: 'Facebook ID',
    videoSrc: supportChannelVideo,
    accent: 'cyan',
  },
  {
    eyebrow: 'Promo Channel',
    title: 'MerxyLab Messenger',
    copy: 'Use this for direct Messenger replies, order questions, and quick customer chat.',
    buttonLabel: 'Add Messenger Link',
    handle: 'Messenger Link',
    roleLabel: 'Main Messenger',
    handleLabel: 'Messenger ID',
    videoSrc: mainChannelVideo,
    accent: 'blue',
  },
  {
    eyebrow: 'Support Channel',
    title: 'MerxyLab Support',
    copy: 'Use this for support follow-up, account help, and post-purchase guidance.',
    buttonLabel: 'Add Support Link',
    handle: '@merxylabsupport',
    roleLabel: 'Support Channel',
    handleLabel: 'Telegram ID',
    videoSrc: supportChannelVideo,
    accent: 'cyan',
  },
];

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
