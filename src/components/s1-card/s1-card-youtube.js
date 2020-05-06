import createHTML from '../util';
import sectionOneCardTop from '../s1-card-components/s1-card-top';
import sectionOneCardMid from '../s1-card-components/s1-card-mid';
import sectionOneCardBot from '../s1-card-components/s1-card-bot';

const sectionOneCardYoutube = (() => {
  const youtube = createHTML(
    'div',
    's1-card s1-card-youtube card-def',
    null,
    null
  );
  youtube.appendChild(sectionOneCardTop('youtube', 'Nathan F.'));
  youtube.appendChild(sectionOneCardMid('youtube', 8239, true));
  youtube.appendChild(sectionOneCardBot('youtube', 144, 'icon-down', 'red'));
  return youtube;
})();

export default sectionOneCardYoutube;
