import createHTML from '../util';

const sectionTwoCardTop = (socialMedia, titleName) => {
  const s2CardTop = createHTML(
    'div',
    's2-card-top s2-top-bot-default',
    null,
    null
  );
  const s2CardTitle = createHTML('span', 's2-card-title', null, titleName);
  const s2Icon = createHTML('span', `icon-${socialMedia} icon-svg`, null, null);
  s2CardTop.appendChild(s2CardTitle);
  s2CardTop.appendChild(s2Icon);
  return s2CardTop;
};

export default sectionTwoCardTop;
