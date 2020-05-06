import createHTML from '../util';

const sectionOneCardTop = (socialMedia, usernameStr) => {
  const s1CardTop = createHTML('div', 's1-card-top', null, null);
  const iconElement = createHTML(
    'span',
    `icon-${socialMedia} icon-svg`,
    null,
    null
  );
  const usernameElement = createHTML(
    'span',
    'username',
    `${socialMedia}-username`,
    usernameStr
  );
  s1CardTop.appendChild(iconElement);
  s1CardTop.appendChild(usernameElement);
  return s1CardTop;
};

export default sectionOneCardTop;
