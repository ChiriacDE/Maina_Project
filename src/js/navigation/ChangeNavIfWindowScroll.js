export class ChangeNavIfWindowScroll {
    constructor(options) {
        this.options = options;
        this.nav = document.querySelector(this.options.nav);
        this.state = this.options.state;
        this.heightActivateState = this.options.heightActivateState;

        this._startToggleState();
    }
    _startToggleState() {
        $(window).on("scroll", () => {
            const scrolled = window.pageYOffset || document.documentElement.scrollTop;
            const classList = this.nav.classList;

            if (scrolled > this.heightActivateState) {
                if (!classList.contains(this.state)) classList.add(this.state);
            } else {
                if (classList.contains(this.state)) classList.remove(this.state);
            }
        });
    }
}