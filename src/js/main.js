import '../css/globalStyles.css';
import '../css/style.css';
import '../css/variables.css';
import consoleLogTesting from './consoleLogTesting';
import { exampleObject1, exampleObject2 } from './constants/exampleObject';

const button = document.querySelector('.app-wrapper__button');

consoleLogTesting(exampleObject1, false);
consoleLogTesting(exampleObject2, false);

button.addEventListener('click', () => consoleLogTesting(exampleObject1, true));
