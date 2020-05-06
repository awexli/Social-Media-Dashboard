import createHTML from '../util';

const titleWrapper = (() => {
  const wrapper = createHTML('div', 'title-wrapper', null, null);
  const title = createHTML('h1', 'title', null, 'Social Media Dashboard');
  const titleSubhead = createHTML(
    'p',
    'title-subhead',
    null,
    'Total Followers: '
  );
  const totalFollowers = createHTML('span', null, 'total-followers', '23,004');
  titleSubhead.appendChild(totalFollowers);
  wrapper.appendChild(title);
  wrapper.appendChild(titleSubhead);
  return wrapper;
})();

export default titleWrapper;
