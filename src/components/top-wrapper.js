import createHTML from './util';
import header from './header';
import sectionContainer from './section-one-container';

const topWrapper = (() => {
  const topWrapperDiv = createHTML('div', 'top-wrapper', null, null);
  topWrapperDiv.appendChild(header);
  topWrapperDiv.appendChild(sectionContainer);
  return topWrapperDiv;
})();

export default topWrapper;
