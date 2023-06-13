import './styles/globalStyles.css';
import './index.css';
import './styles/variables.css';
import onNavigationChange from './router/onNavigationChange';
import pageContentHandler from './router/pageContentHandler';

pageContentHandler();

const hideNavbarButton = document.querySelector('.navbar-wrapper__hide-icon');
const showNavbarButton = document.querySelector('.navbar-wrapper__show-icon');
const navbarList = document.querySelector('.navbar-wrapper__list');
const navButtons = [...document.querySelectorAll('.navbar-wrapper__list__element')];

const hideNavbarHandler = () => {
  hideNavbarButton.style.display = 'none';
  showNavbarButton.style.display = 'block';
  navbarList.classList.remove('navbar-wrapper__list--show');
  navbarList.classList.add('navbar-wrapper__list--animation-hide');
  setTimeout(() => navbarList.classList.add('navbar-wrapper__list--hide'), 500);
};

const showNavbarHandler = () => {
  hideNavbarButton.style.display = 'block';
  showNavbarButton.style.display = 'none';
  navbarList.classList.remove('navbar-wrapper__list--hide');
  navbarList.classList.add('navbar-wrapper__list--show');
};

navButtons.map((element) => element.addEventListener('click', onNavigationChange));
hideNavbarButton.addEventListener('click', hideNavbarHandler);
showNavbarButton.addEventListener('click', showNavbarHandler);
