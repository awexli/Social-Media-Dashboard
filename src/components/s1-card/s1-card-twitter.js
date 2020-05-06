import createHTML from '../util';
import sectionOneCardTop from '../s1-card-components/s1-card-top';
import sectionOneCardMid from '../s1-card-components/s1-card-mid';
import sectionOneCardBot from '../s1-card-components/s1-card-bot';

const sectionOneCardTwitter = (() => {
  const twitter = createHTML(
    'div',
    's1-card s1-card-twitter card-def',
    null,
    null
  );
  twitter.appendChild(sectionOneCardTop('twitter', '@nathanf'));
  twitter.appendChild(sectionOneCardMid('twitter', 1044));
  twitter.appendChild(sectionOneCardBot('twitter', 99, 'icon-up', 'green'));
  return twitter;
})();

export default sectionOneCardTwitter;
