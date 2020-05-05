const toggle = document.querySelector('.toggle-wrapper');
const mainTheme = document.querySelector('.dark-theme');
let isLight = false;

toggle.addEventListener('click', () => {
  if (!isLight) {
    isLight = true;
    mainTheme.className = mainTheme.className.replace(
      'dark-theme',
      'light-theme'
    );
  } else {
    isLight = false;
    mainTheme.className = mainTheme.className.replace(
      'light-theme',
      'dark-theme'
    );
  }
});
