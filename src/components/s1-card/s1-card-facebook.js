import createHTML from '../util';
import sectionOneCardTop from '../s1-card-components/s1-card-top';
import sectionOneCardMid from '../s1-card-components/s1-card-mid';
import sectionOneCardBot from '../s1-card-components/s1-card-bot';

const sectionOneCardFacebook = (() => {
  const facebook = createHTML(
    'div',
    's1-card s1-card-facebook card-def',
    null,
    null
  );
  facebook.appendChild(sectionOneCardTop('facebook', '@nathanf'));
  facebook.appendChild(sectionOneCardMid('facebook', 1987));
  facebook.appendChild(sectionOneCardBot('facebook', 12, 'icon-up', 'green'));
  return facebook;
})();

export default sectionOneCardFacebook;
