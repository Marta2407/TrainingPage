import './fourthPage.css';

const fourthPageHandler = () => {
  const aboutButton = document.querySelector('.fourth-page-wrapper__button');
  aboutButton.addEventListener('click', () => alert('Fourth page alert'));
};

export default fourthPageHandler;
