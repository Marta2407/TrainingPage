import './firstPage.css';

const firstPageHandler = () => {
  const homeButton = document.querySelector('.first-page-wrapper__button');
  homeButton.addEventListener('click', () => alert('first page alert'));
};

export default firstPageHandler;
