import createHTML from './util';
import sectionTwoContainer from './section-two-container';

const bottomWrapper = (() => {
  const bottomWrapperDiv = createHTML('div', 'bottom-wrapper', null, null);
  const sectionTwoTitle = createHTML('h2', 'title', null, 'Overview - Today');
  bottomWrapperDiv.appendChild(sectionTwoTitle);
  bottomWrapperDiv.appendChild(sectionTwoContainer);
  return bottomWrapperDiv;
})();

export default bottomWrapper;
