export function addHighlight(string) {
    const highlight = document.createElement('span');
    highlight.classList.add('header-highlight');

    highlight.innerHTML = string;
    return highlight;
}

export function changeIndexHighlight() {
    const home = document.querySelector('.home');
    const header = home.querySelector('.header-container');

    // Append the span element and add a ! symbol anfet it.
    header.firstChild.appendChild(addHighlight('Maina'));
    header.firstChild.insertAdjacentHTML('beforeend', '!');
}
