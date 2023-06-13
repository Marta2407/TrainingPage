import './thirdPage.css';

const thirdPageHandler = () => {
  const loremButton = document.querySelector('.third-page-wrapper__button');
  loremButton.addEventListener('click', () => alert('third page alert'));
};

export default thirdPageHandler;
