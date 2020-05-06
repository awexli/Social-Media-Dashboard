import createHTML from '../util';
import sectionTwoCardTop from '../s2-card-components/s2-card-top';
import sectionTwoCardBot from '../s2-card-components/s2-card-bot';

const sectionTwoCardInstagram = (
  title,
  isLikes,
  count,
  percentage,
  iconDir
) => {
  const analyticsColor = iconDir === 'icon-down' ? 'red' : 'green';
  const instagram = createHTML(
    'div',
    's2-card s2-card-instagram card-def',
    null,
    null
  );
  instagram.appendChild(sectionTwoCardTop('instagram', `${title}`));
  instagram.appendChild(
    sectionTwoCardBot(
      'instagram',
      count,
      iconDir,
      analyticsColor,
      percentage,
      isLikes
    )
  );
  return instagram;
};

export default sectionTwoCardInstagram;
