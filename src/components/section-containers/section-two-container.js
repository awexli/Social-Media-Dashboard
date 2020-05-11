import createHTML from '../util';
import sectionTwoCardFacebook from '../s2-card/s2-card-facebook';
import sectionTwoCardInstagram from '../s2-card/s2-card-instagram';
import sectionTwoCardTwitter from '../s2-card/s2-card-twitter';
import sectionTwoCardYoutube from '../s2-card/s2-card-youtube';

const sectionTwoContainer = (() => {
  const sectionTwoContainerDiv = createHTML(
    'div',
    'section-container',
    null,
    null
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardFacebook('Page Views', false, 87, 3, 'icon-up')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardFacebook('Likes', true, 52, 2, 'icon-down')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardInstagram('Page Views', false, '52k', 1375, 'icon-up')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardInstagram('Likes', true, 5426, 2257, 'icon-up')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardTwitter('Retweets', false, 117, 303, 'icon-up')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardTwitter('Likes', true, 507, 553, 'icon-up')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardYoutube('Likes', true, 1407, 12, 'icon-down')
  );
  sectionTwoContainerDiv.appendChild(
    sectionTwoCardYoutube('Total Views', false, 107, 19, 'icon-down')
  );
  return sectionTwoContainerDiv;
})();

export default sectionTwoContainer;
