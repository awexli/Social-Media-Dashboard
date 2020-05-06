import createHTML from '../util';

const themeWrapper = (() => {
  const themeWrapperElement = createHTML('div', 'theme-wrapper', null, null);
  const themeName = createHTML('p', 'theme-name', null, 'Dark Mode');
  const toggleWrapper = createHTML('div', 'toggle-wrapper', null, null);
  const toggleCircle = createHTML('div', 'toggle-circle', null, null);
  toggleWrapper.setAttribute('aria-label', 'Toggle Dark Mode');
  toggleWrapper.appendChild(toggleCircle);
  themeWrapperElement.appendChild(themeName);
  themeWrapperElement.appendChild(toggleWrapper);
  return themeWrapperElement;
})();

export default themeWrapper;
