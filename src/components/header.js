import createHTML from './util';
import titleWrapper from './header-components/title-wrapper';
import divider from './header-components/divider';
import themeWrapper from './header-components/theme-wrapper';

const header = (() => {
  const headerChildren = [titleWrapper, divider, themeWrapper];
  const headerElement = createHTML('header', null, null, null);
  headerChildren.forEach((child) => {
    headerElement.appendChild(child);
  });
  return headerElement;
})();

export default header;
