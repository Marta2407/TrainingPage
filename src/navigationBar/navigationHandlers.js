import { showNavbarButton, hideNavbarButton } from '..';

const navbarList = document.querySelector('.navbar-wrapper__list');

export const hideNavbarHandler = () => {
  hideNavbarButton.style.display = 'none';
  showNavbarButton.style.display = 'block';
  navbarList.classList.remove('navbar-wrapper__list--show');
  navbarList.classList.add('navbar-wrapper__list--animation-hide');
  setTimeout(() => navbarList.classList.add('navbar-wrapper__list--hide'), 500);
};

export const showNavbarHandler = () => {
  hideNavbarButton.style.display = 'block';
  showNavbarButton.style.display = 'none';
  navbarList.classList.remove('navbar-wrapper__list--hide');
  navbarList.classList.add('navbar-wrapper__list--show');
};
