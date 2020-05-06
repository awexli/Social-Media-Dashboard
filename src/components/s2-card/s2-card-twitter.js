import createHTML from '../util';
import sectionTwoCardTop from '../s2-card-components/s2-card-top';
import sectionTwoCardBot from '../s2-card-components/s2-card-bot';

const sectionTwoCardTwitter = (title, isLikes, count, percentage, iconDir) => {
  const analyticsColor = iconDir === 'icon-down' ? 'red' : 'green';
  const twitter = createHTML(
    'div',
    's2-card s2-card-twitter card-def',
    null,
    null
  );
  twitter.appendChild(sectionTwoCardTop('twitter', `${title}`));
  twitter.appendChild(
    sectionTwoCardBot(
      'twitter',
      count,
      iconDir,
      analyticsColor,
      percentage,
      isLikes
    )
  );
  return twitter;
};

export default sectionTwoCardTwitter;
