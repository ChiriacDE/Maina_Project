export default class HeaderBuilder {
    constructor(title, p) {
        this.title = title;
        this.p = p;
    }

    _buildHeader() {
        // Create the header Tag
        const header = document.createElement('header');
        header.classList.add('main-header');

        // Create the header container division
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header-container');

        // Append children and return
        headerContainer.appendChild(this._addTitle());
        headerContainer.appendChild(this._addParagraph());

        header.appendChild(headerContainer);
        return header;
    }

    _addTitle() {
        // Create h1 Tag
        const h1 = document.createElement('h1');
        h1.textContent = this.title;
        
        return h1;
    }

    _addParagraph() {
        // Create p Tag
        const p = document.createElement('p');
        p.textContent = this.p;
        
        return p;
    }
}
