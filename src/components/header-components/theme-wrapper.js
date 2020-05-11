import createHTML from '../util';

const themeWrapper = (() => {
  const themeWrapperElement = createHTML('div', 'theme-wrapper', null, null);
  const themeName = createHTML('p', 'theme-name', null, 'Dark Mode');
  const toggleWrapper = createHTML('a', 'toggle-wrapper', null, null);
  const toggleCircle = createHTML('div', 'toggle-circle', null, null);
  toggleWrapper.setAttribute('role', 'button');
  toggleWrapper.setAttribute('tabindex', '0');
  toggleWrapper.appendChild(toggleCircle);
  themeWrapperElement.appendChild(themeName);
  themeWrapperElement.appendChild(toggleWrapper);
  return themeWrapperElement;
})();

export default themeWrapper;
