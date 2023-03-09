import { getMenuLinks } from './navigation/_functionNavigation.js';
import MenuBuilder from './navigation/MenuBuilder.js';
import HeaderBuilder from './header/HeaderBuilder.js';
import FooterBuilder from './footer/FooterBuilder.js';
import { changeIndexHighlight } from './header/_functionsHeader.js';

// Create Menu bar for the main page (index.html)
const menu = new MenuBuilder(getMenuLinks(), getMenuLinks().length);
document.querySelector('body').insertBefore(menu._buildMenu(), document.querySelector('body').firstChild);

// Create a header for the main page (index.html) and insert it on the top
const header = new HeaderBuilder(
  'Bienvenidos a ',
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
);
document.querySelector('body').insertBefore(header._buildHeader(), document.querySelector('main'));
changeIndexHighlight(); // Adds a highlight

const footer = new FooterBuilder();
document.querySelector('body').appendChild(footer._buildFooter());