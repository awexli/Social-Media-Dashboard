import createHTML from '../util';
import sectionOneCardFacebook from '../s1-card/s1-card-facebook';
import sectionOneCardTwitter from '../s1-card/s1-card-twitter';
import sectionOneCardInstagram from '../s1-card/s1-card-instagram';
import sectionOneCardYoutube from '../s1-card/s1-card-youtube';

const sectionOneContainer = (() => {
  const sectionOneContainerDiv = createHTML(
    'div',
    'section-container',
    null,
    null
  );
  sectionOneContainerDiv.appendChild(sectionOneCardFacebook);
  sectionOneContainerDiv.appendChild(sectionOneCardTwitter);
  sectionOneContainerDiv.appendChild(sectionOneCardInstagram);
  sectionOneContainerDiv.appendChild(sectionOneCardYoutube);
  return sectionOneContainerDiv;
})();

export default sectionOneContainer;
