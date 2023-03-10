import { getMenuLinks } from './navigation/_functionNavigation.js';
import MenuBuilder from './navigation/MenuBuilder.js';
import HeaderBuilder from './header/HeaderBuilder.js';
import FooterBuilder from './footer/FooterBuilder.js';
import { changeIndexHighlight } from './header/_functionsHeader.js';


console.log('I work as builder!');
// Build HTML elements
window.addEventListener('DOMContentLoaded', buildSite);


// Adds a highlight to the main header
changeIndexHighlight(); 

export function buildSite() {
    const body = document.querySelector('body');
    // Create HTML elements
    const menu = new MenuBuilder(getMenuLinks(), getMenuLinks().length);
    const header = new HeaderBuilder('Bienvenidos a ',`Lorem ipsum dolor sit amet consectetur, adipisicing elit.`);
    const footer = new FooterBuilder();

    // Build them in the sites
    body.insertBefore(menu._buildMenu(), document.querySelector('body').firstChild);
    body.insertBefore(header._buildHeader(), document.querySelector('main'));
    body.insertBefore(footer._buildFooter(), document.querySelector('.before-scripts'));
}