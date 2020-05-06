import toggleTheme from './components/toggle-theme';
import topWrapper from './components/top-wrapper';
import bottomWrapper from './components/bottom-wrapper';
import attribution from './components/attribution';

const mainDiv = document.querySelector('.dark-theme');
mainDiv.appendChild(topWrapper);
mainDiv.appendChild(bottomWrapper);
mainDiv.appendChild(attribution);
toggleTheme();
