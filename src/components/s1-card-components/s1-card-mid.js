import createHTML from '../util';

const sectionOneCardMid = (socialMedia, followerCount, isYoutube = false) => {
  const supporterText = isYoutube ? 'Subscribers' : 'Followers';
  const s1CardMid = createHTML('div', 's1-card-mid', null, null);
  const supporterElement = createHTML(
    'div',
    'card-count-text',
    `${socialMedia}-supporter-count`,
    String(followerCount)
  );
  const followerText = createHTML(
    'p',
    's1-card-follow-text',
    null,
    supporterText
  );
  s1CardMid.appendChild(supporterElement);
  s1CardMid.appendChild(followerText);
  return s1CardMid;
};

export default sectionOneCardMid;
