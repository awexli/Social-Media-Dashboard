import createHTML from '../util';
import sectionOneCardTop from '../s1-card-components/s1-card-top';
import sectionOneCardMid from '../s1-card-components/s1-card-mid';
import sectionOneCardBot from '../s1-card-components/s1-card-bot';

const sectionOneCardInstagram = (() => {
  const instagram = createHTML(
    'div',
    's1-card s1-card-instagram card-def',
    null,
    null
  );
  instagram.appendChild(sectionOneCardTop('instagram', '@nathanf'));
  instagram.appendChild(sectionOneCardMid('instagram', '11k'));
  instagram.appendChild(
    sectionOneCardBot('instagram', 1099, 'icon-up', 'green')
  );
  return instagram;
})();

export default sectionOneCardInstagram;
