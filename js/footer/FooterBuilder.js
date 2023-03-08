export default class FooterBuilder {
    constructor() {

    }

    _buildFooter() {
        // Create footer Tag and its class
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        // Create footer content division
        const footerContent = document.createElement('div');
        footerContent.classList.add('footer-content');

        // Create first column
        const firstColumn = this._addColumn();
        const firstColumn__menu = this._addMenu('Compañía', 'menu-legal');
        const firstColumn__menu___firstList = this._addMenuList(
            '../views/html/politicas-privacidad.html',
            'Política de privacidad'
        );
        const firstColumn__menu___secondList = this._addMenuList(
            '../views/html/terminos-condiciones.html',
            'Términos y condiciones'
        );
        const firstColumn__menu___list = firstColumn__menu.querySelector('ul');
        firstColumn__menu___list.appendChild(firstColumn__menu___firstList);
        firstColumn__menu___list.appendChild(firstColumn__menu___secondList);
        firstColumn.appendChild(firstColumn__menu);

        // Create second column
        const secondColumn = this._addColumn();
        const secondColumn__callToAction = this._addCallToAction(
            'Ayúdanos a crecer',
            '¿Te gusta lo que hacemos?',
            '../views/html/donaciones.html',
            '¡Ayúdanos a crecer!'
        );
        secondColumn.appendChild(secondColumn__callToAction);

        // Create third column
        const thirdColumn = this._addColumn();
        const thirdColumn__menu = this._addMenu('Idiomas disponibles', 'menu-company');
        const thirdColumn__menu___firstList = this._addMenuList(
            '',
            'Español'
        );
        const thirdColumn__menu___list = thirdColumn__menu.querySelector('ul');
        thirdColumn__menu___list.appendChild(thirdColumn__menu___firstList);
        thirdColumn.appendChild(thirdColumn__menu);

        // Create forth column
        const fourthColumn = this._addColumn();
        const fourthColumn__callToAction = this._addCallToAction(
            'Hablemos',
            '¿Tienes alguna pregunta?',
            '',
            'Ponte en contacto'
        );
        fourthColumn.appendChild(fourthColumn__callToAction);

        // Append children to footer content division
        footerContent.appendChild(firstColumn);
        footerContent.appendChild(secondColumn);
        footerContent.appendChild(thirdColumn);
        footerContent.appendChild(fourthColumn);

        // Append children to the footer
        footer.appendChild(this._addWave());
        footer.appendChild(this._addLogo());
        footer.appendChild(footerContent);
        
        return footer;
    }

    _addWave() {
        // Create a SVG element
        const svg = document.createElement("svg");
        svg.classList.add("footer-wave-svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg")
        svg.setAttribute("viewBox", "0 0 1200 100");
        svg.setAttribute("preserveAspectRatio", "none");

        // Create the path element
        const path = document.createElement("path");
        path.classList.add("footer-wave-path");
        path.setAttribute("d", "M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z");

        // Append both elements and return them
        svg.appendChild(path);
        return svg;
    }

    _addLogo() {
        // Create logo division 
        const footerLogo = document.createElement('div');
        footerLogo.classList.add('footer-logo');

        // Create anchor with the link
        const link = document.createElement('a');
        link.classList.add('footer-logo-link');
        link.href = '';

        footerLogo.appendChild(link);
        return footerLogo;
    }

    _addColumn() {
        // Create footer column for menu and call to actions
        const column = document.createElement('div');
        column.classList.add('footer-content-column');

        return column;
    }

    _addMenu(title, listID) {
        // Create menu division template
        const menu = document.createElement('div');
        menu.classList.add('footer-menu');

        // Title created in _addMenutTitle

        // Create list
        const ul = document.createElement('ul');
        ul.classList.add('footer-menu-list');
        ul.setAttribute('id', listID);

        // Append all together and return
        menu.appendChild(this._addMenuTitle(title));
        menu.appendChild(ul);
        
        return menu;
    }

    _addMenuList(url, title) {
        const list = document.createElement('li');
        const a = document.createElement('a');

        a.textContent = title;
        a.setAttribute('href', url);

        list.appendChild(a);
        return list;
    }

    _addCallToAction(title, description, url, a) {
        // Create call to action division template
        const callToAction = document.createElement('div');
        callToAction.classList.add('footer-call-to-action');

        // Title created in _addMenutTitle

        // Create description paragraph
        const p = document.createElement('p');
        p.classList.add('footer-call-to-action-description');
        p.textContent = description;

        // Create call to action button
        const button = document.createElement('a');
        button.classList.add('footer-call-to-action-button', 'button');
        button.href = url;
        button.textContent = a;
        button.setAttribute('target', '_self');

        // Append everything and return element
        callToAction.appendChild(this._addMenuTitle(title));
        callToAction.appendChild(p);
        callToAction.appendChild(button);
        return callToAction;
    }

    _addMenuTitle(title) {
        // Create title 
        const h2 = document.createElement('h2');
        h2.classList.add('footer-menu-name')
        h2.textContent = title;

        return h2;
    }

    _addSocialContainer() {
        const div = document.createElement('div');

    }
}