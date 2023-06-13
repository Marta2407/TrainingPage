import './secondPage.css';

const secondPageHandler = () => {
  const aboutButton = document.querySelector('.second-page-wrapper__button');
  aboutButton.addEventListener('click', () => alert('Second page alert'));
};

export default secondPageHandler;
