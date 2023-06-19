import pageContentHandler from './pageContentHandler';

const onNavigationChange = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  pageContentHandler();
};

window.route = onNavigationChange;

export default onNavigationChange;
