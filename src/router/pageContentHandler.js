import routes from './routes';
import firstPageHandler from '../pages/firstPage/firstPageHandler';
import secondPageHandler from '../pages/secondPage/secondPageHandler';
import thirdPageHandler from '../pages/thirdPage/thirdPageHandler';
import notFoundHandler from '../pages/notFound/notFoundHandler';

const pageContentHandler = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const htmlContent = await fetch(route).then((data) => data.text());
  document.getElementsByClassName('current-page')[0].innerHTML = htmlContent;

  switch (path) {
    case '/':
      firstPageHandler();
      break;
    case '/second-page':
      secondPageHandler();
      break;
    case '/third-page':
      thirdPageHandler();
      break;
    default:
      notFoundHandler();
  }
};

window.onpopstate = pageContentHandler;

export default pageContentHandler;
