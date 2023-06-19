import './styles/globalStyles.css';
import './index.css';
import './styles/variables.css';
import onNavigationChange from './router/onNavigationChange';
import pageContentHandler from './router/pageContentHandler';
import { hideNavbarHandler, showNavbarHandler } from './navigationBar/navigationHandlers';

pageContentHandler();

export const hideNavbarButton = document.querySelector('.navbar-wrapper__hide-icon');
export const showNavbarButton = document.querySelector('.navbar-wrapper__show-icon');
const navButtons = [...document.querySelectorAll('.navbar-wrapper__list__element')];

navButtons.map((element) => element.addEventListener('click', onNavigationChange));
hideNavbarButton.addEventListener('click', () =>
  hideNavbarHandler(hideNavbarButton, showNavbarButton)
);
showNavbarButton.addEventListener('click', () =>
  showNavbarHandler(hideNavbarButton, showNavbarButton)
);
