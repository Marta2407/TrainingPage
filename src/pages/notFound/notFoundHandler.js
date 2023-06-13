import './notFound.css';
import onNavigationChange from '../../router/onNavigationChange';

const notFoundHandler = () => {
  const redirectButton = document.querySelector('.not-found-wrapper__nav');
  redirectButton.addEventListener('click', onNavigationChange);
};

export default notFoundHandler;
