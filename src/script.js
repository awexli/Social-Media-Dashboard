const toggle = document.querySelector('.toggle-wrapper');
let isLight = false;
toggle.addEventListener('click', () => {
  if (!isLight) {
    document.body.style.backgroundColor = 'hsl(0, 0%, 100%)';
    document.querySelectorAll('.white-text').forEach((e) => {
      e.style.color = 'hsl(230, 17%, 14%)';
    });
    document.querySelectorAll('.sub-text').forEach((e) => {
      e.style.color = 'hsl(228, 12%, 44%)';
    });
    document.querySelectorAll('.card-default').forEach((e) => {
      e.className = e.className.replace(' card-default', '');
      e.className += ' card-light';
    });
    isLight = true;
  } else {
    document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
    document.querySelectorAll('.white-text').forEach((e) => {
      e.style.color = 'hsl(0, 0%, 100%)';
    });
    document.querySelectorAll('.sub-text').forEach((e) => {
      e.style.color = 'hsl(228, 34%, 66%)';
    });
    document.querySelectorAll('.card-light').forEach((e) => {
      e.className = e.className.replace(' card-light', '');
      e.className += ' card-default';
    });
    isLight = false;
  }
});
