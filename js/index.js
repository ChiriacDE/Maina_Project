import { getMenuLinks } from './navigation/_functionNavigation';
import MenuBuilder from './navigation/MenuBuilder';
import HeaderBuilder from './header/HeaderBuilder';
import FooterBuilder from './footer/FooterBuilder';
import { changeIndexHighlight } from './header/_functionsHeader';

// Create Menu bar for the main page (index.html)
const menu = new MenuBuilder(getMenuLinks(), getMenuLinks().length);
document.querySelector('body').insertBefore(menu._buildMenu(), document.querySelector('body').firstChild);

// Create a header for the main page (index.html) and insert it on the top
const header = new HeaderBuilder(
  'Bienvenidos a ',
  `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`
);
document.querySelector('.home').insertBefore(header._buildHeader(), document.querySelector('main'));
changeIndexHighlight(); // Adds a highlight

const footer = new FooterBuilder();
document.querySelector('body').appendChild(footer._buildFooter());