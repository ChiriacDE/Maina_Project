export default class MenuBuilder {
    constructor(menuItems, submenuCounts) {
        this.menuItems = menuItems;
        this.submenuCounts = submenuCounts;
    }

    _buildMenu() {
        // Create main nav element
        const nav = document.createElement('nav');
        nav.classList.add('main-nav');

        // Create content division
        const navContent = document.createElement('div');
        navContent.classList.add('nav-content');

        // Append children
        navContent.appendChild(this._addLeftContent());
        navContent.appendChild(this._addRightContent());
        navContent.appendChild(this._addTuggleContent());
        nav.appendChild(navContent);

        return nav
    }    

    _addNavItem() {
        // Create list element
        const navItem = document.createElement('li');
        navItem.classList.add('nav-item');

        // Create navigation anchor
        const navLink = document.createElement('a');
        navLink.classList.add('nav-link');

        // Append and return
        navItem.appendChild(navLink);
        return navItem;
    }

    _addLogoLink() {
        // Get nav Item
        const logo = this._addNavItem();
        const logoLink = logo.querySelector('.nav-link');

        // Add logo class and link
        logoLink.classList.add('logo');
        logoLink.href = '';

        return logo;
    }

    _addTuggleButtonItems() {
        // Create list element
        const navItem = document.createElement('li');
        navItem.classList.add('nav-item', 'tuggle-btn');

        // Create tuggle button
        const tuggleContent = document.createElement('div');
        tuggleContent.classList.add('tuggle-btn-content');
        
        // Append as many span elements as submenus available
        for(let i=0; i<this.submenuCounts; i++) {
            tuggleContent.appendChild(document.createElement('span'));
        }

        // Append everything and return
        navItem.appendChild(tuggleContent);
        return navItem;
    }

    _addLeftContent() {
        // Create menu's left side list
        const leftContent = document.createElement('ul');
        leftContent.classList.add('left-content');
        
        // Add list content
        leftContent.appendChild(this._addLogoLink());
        leftContent.appendChild(this._addTuggleButtonItems());
        
        return leftContent;
    }

    _addRightContent() {
        // Create menu's right side list
        const rightContent = document.createElement('ul');
        rightContent.classList.add('right-content');

        // Create first link
        const firstChild = this._addNavItem();
        firstChild.firstChild.href = "#";
        firstChild.firstChild.textContent = '¡Dona!';

        // Create second link
        const secondChild = this._addNavItem();
        secondChild.classList.add('registration');
        secondChild.firstChild.href = '#header';
        secondChild.firstChild.textContent = 'Podcasts';

        // Append and return
        rightContent.appendChild(firstChild);
        rightContent.appendChild(secondChild);

        return rightContent;
    }

    _addTuggleContent() {
        // Create tuggle division
        const tuggleContent = document.createElement('div');
        tuggleContent.classList.add('tuggle-content');
        
        const tuggleContentList = document.createElement('ul');

        // Append as many children as menu items available
        for (let i=0; i<this.submenuCounts; i++) {
            // Create nav item 
            let child = this._addNavItem();

            // Customize anchor
            child.firstChild.href = `#${this.menuItems[i].url}`;
            child.firstChild.textContent = `${this.menuItems[i].title}`;

            // Append child to the content list
            tuggleContentList.appendChild(child);
        }

        // Append everything and return
        tuggleContent.appendChild(tuggleContentList);
        return tuggleContent;
    }
}