import createHTML from '../util';
import sectionTwoCardTop from '../s2-card-components/s2-card-top';
import sectionTwoCardBot from '../s2-card-components/s2-card-bot';

const sectionTwoCardFacebook = (title, isLikes, count, percentage, iconDir) => {
  const analyticsColor = iconDir === 'icon-down' ? 'red' : 'green';
  const facebook = createHTML(
    'div',
    's2-card s2-card-facebook card-def',
    null,
    null
  );
  facebook.appendChild(sectionTwoCardTop('facebook', `${title}`));
  facebook.appendChild(
    sectionTwoCardBot(
      'facebook',
      count,
      iconDir,
      analyticsColor,
      percentage,
      isLikes
    )
  );
  return facebook;
};

export default sectionTwoCardFacebook;
