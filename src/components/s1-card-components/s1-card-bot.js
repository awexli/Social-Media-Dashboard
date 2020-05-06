import createHTML from '../util';

const sectionOneCardBot = (
  socialMedia,
  analyticsCount,
  iconDirection,
  textColorStr
) => {
  const s1CardBot = createHTML('div', 's1-card-bot', null, null);
  const iconElement = createHTML(
    'span',
    `${iconDirection} icon-arrow`,
    null,
    null
  );
  const textColor = createHTML(
    'span',
    `${textColorStr}-text-analytics`,
    null,
    null
  );
  const analytics = createHTML(
    'span',
    null,
    `${socialMedia}-analytics`,
    `${String(analyticsCount)} Today`
  );
  textColor.appendChild(analytics);
  s1CardBot.appendChild(iconElement);
  s1CardBot.appendChild(textColor);
  return s1CardBot;
};

export default sectionOneCardBot;
