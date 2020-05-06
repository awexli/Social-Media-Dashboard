import createHTML from './util';

const attribution = (() => {
  const attributionDiv = createHTML('div', 'attribution', null, 'Coded by ');
  const hyperLinkElement = createHTML('a', null, 'source-code', 'Alex Li');
  hyperLinkElement.href = 'https://github.com/awexli/Social-Media-Dashboard';
  hyperLinkElement.setAttribute('target', '_blank');
  hyperLinkElement.setAttribute('rel', 'noopener noreferrer');
  attributionDiv.appendChild(hyperLinkElement);
  return attributionDiv;
})();

export default attribution;
