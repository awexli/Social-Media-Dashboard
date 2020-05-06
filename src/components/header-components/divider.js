import createHTML from '../util';

const divider = (() => {
  const divderElement = createHTML('div', 'divider', null, null);
  return divderElement;
})();

export default divider;
