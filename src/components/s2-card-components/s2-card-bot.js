import createHTML from '../util';

const sectionTwoCardBot = (
  socialMedia,
  count,
  iconDir,
  analyticsColor,
  percentage,
  isLikes
) => {
  const analyticsType = isLikes ? 'likes' : 'views';
  const s2CardBot = createHTML(
    'div',
    's2-card-bot s2-top-bot-default',
    null,
    null
  );
  const cardCount = createHTML(
    'span',
    'card-count-text',
    `${socialMedia}-${analyticsType}-count`,
    String(count)
  );
  const analyticsWrapper = createHTML('div', 's2-card-analytics', null, null);
  const iconArrow = createHTML('span', `${iconDir} icon-arrow`);
  const analyticsTextColor = createHTML(
    'span',
    `${analyticsColor}-text-analytics`,
    null,
    null
  );
  const analytics = createHTML(
    'span',
    null,
    `${socialMedia}-${analyticsType}-analytics`,
    `${String(percentage)}%`
  );
  analyticsTextColor.appendChild(analytics);
  analyticsWrapper.appendChild(iconArrow);
  analyticsWrapper.appendChild(analyticsTextColor);
  s2CardBot.appendChild(cardCount);
  s2CardBot.appendChild(analyticsWrapper);
  return s2CardBot;
};

export default sectionTwoCardBot;
