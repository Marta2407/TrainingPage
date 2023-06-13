import pageContentHandler from './pageContentHandler';

const onNavigationChange = (event) => {
  const changeEvent = event || window.event;
  changeEvent.preventDefault();
  window.history.pushState({}, '', event.target.href);
  pageContentHandler();
};

window.route = onNavigationChange;

export default onNavigationChange;
