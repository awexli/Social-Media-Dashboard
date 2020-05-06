import createHTML from '../util';
import sectionTwoCardTop from '../s2-card-components/s2-card-top';
import sectionTwoCardBot from '../s2-card-components/s2-card-bot';

const sectionTwoCardYoutube = (title, isLikes, count, percentage, iconDir) => {
  const analyticsColor = iconDir === 'icon-down' ? 'red' : 'green';
  const youtube = createHTML(
    'div',
    's2-card s2-card-youtube card-def',
    null,
    null
  );
  youtube.appendChild(sectionTwoCardTop('youtube', `${title}`));
  youtube.appendChild(
    sectionTwoCardBot(
      'youtube',
      count,
      iconDir,
      analyticsColor,
      percentage,
      isLikes
    )
  );
  return youtube;
};

export default sectionTwoCardYoutube;
