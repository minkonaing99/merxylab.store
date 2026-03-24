import mainChannelVideo from '../../moving_card/animatedman.mp4';
import supportChannelVideo from '../../moving_card/animatefemale.mp4';
import messengerChannelVideo from '../../moving_card/smokeman.mp4';
import supportAltChannelVideo from '../../moving_card/tonato.mp4';

export const channels = [
  {
    eyebrow: 'Main Telegram',
    title: 'MerxyLab Main',
    copy: 'Use this for price updates, promo drops, and new service announcements.',
    buttonLabel: 'Add Main Link',
    buttonHref: 'https://t.me/merxylabstore',
    handle: '@merxylabstore',
    videoSrc: mainChannelVideo,
    accent: 'blue',
  },
  {
    eyebrow: 'Main Facebook',
    title: 'MerxyLab Store',
    copy: 'Use this for storefront posts, messenger contact, and direct Facebook updates.',
    buttonLabel: 'Add Facebook Link',
    buttonHref: 'https://facebook.com/merxylabstore',
    handle: 'Facebook Link',
    roleLabel: 'Main Facebook',
    handleLabel: 'Facebook ID',
    videoSrc: supportChannelVideo,
    accent: 'cyan',
  },
  {
    eyebrow: 'Main Messenger',
    title: 'MerxyLab Messenger',
    copy: 'Use this for direct Messenger replies, order questions, and quick customer chat.',
    buttonLabel: 'Add Messenger Link',
    buttonHref: 'https://m.me/merxylabstore',
    handle: 'Messenger Link',
    roleLabel: 'Main Messenger',
    handleLabel: 'Messenger ID',
    videoSrc: messengerChannelVideo,
    accent: 'blue',
  },
  {
    eyebrow: 'Support Channel',
    title: 'MerxyLab Support',
    copy: 'Use this for support follow-up, account help, and post-purchase guidance.',
    buttonLabel: 'Add Support Link',
    buttonHref: 'https://t.me/merxylabsupport',
    handle: '@merxylabsupport',
    roleLabel: 'Support Channel',
    handleLabel: 'Telegram ID',
    videoSrc: supportAltChannelVideo,
    accent: 'cyan',
  },
];
