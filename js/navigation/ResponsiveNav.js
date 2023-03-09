import { ChangeNavIfWindowScroll } from "./ChangeNavIfWindowScroll.js";
import { ScrollToAnchor } from "./ScrollToAnchor.js";
import * as  navFunctions from './_functionNavigation.js';

export class ResponsiveNav {
    constructor(options) {
        this.state = options.state;
        this.nav = options.nav;
        this.checkpoint = options.checkpoint;
        this.navContent = `${options.nav} *`;
        this.tuggleBtn = options.tuggleBtn;
        this.tuggleBtnContent = `${options.tuggleBtn} *`;
        this.navLink = options.navLink;
        this.navLinkContent = `${options.navLink} *`;

        this.$nav = $(this.nav);

        this._eddClickEvents();
        this._addResizeEvent();
        this._addClickOutsideEvent();
    }
    _addResizeEvent() {
        window.addEventListener("resize", () => {
        if (window.innerWidth > this.checkpoint) {
            this._cleare();
        }
        });
    }
    _eddClickEvents() {
        document.addEventListener("click", (e) => {
        if (window.innerWidth > this.checkpoint) {
            return;
        }

        if ($(e.target).is(`${this.tuggleBtn}, ${this.tuggleBtnContent}`)) {
            this._toggleNav(true);
        } else if ($(e.target).is(`${this.navLink}, ${this.navLinkContent}`)) {
            this._toggleNav(false);
        } else if ($(e.target).is(`${this.nav}, ${this.navContent}`)) {
            return;
        }
        });
    }
    _addClickOutsideEvent() {
        document.addEventListener("click", (e) => {
        if (!this.$nav.hasClass(this.state)) {
            return;
        }

        if (window.innerWidth <= this.checkpoint) {
            const clickedOutsideNav = !$(e.target).closest(this.nav).length;
            const clickedNavLink = $(e.target).is(`${this.navLink}, ${this.navLinkContent}`);
            const clickedToggleBtn = $(e.target).is(`${this.tuggleBtn}, ${this.tuggleBtnContent}`);

            if (clickedOutsideNav && !clickedNavLink && !clickedToggleBtn) {
            this._toggleNav();
            }
        }
        });
    }
    _cleare() {
        this._toggleNav(false);
    }
    _toggleNav(ifNavClosed) {
        if (ifNavClosed || this.$nav.hasClass(this.state)) {
        this.$nav.toggleClass(this.state);
        }
    }
}

export function _initializeResponsiveNav() {
    // options for responsiveNav
    const navOptions = {
        nav: ".main-nav", // DOM elemrnt (class or id)
        tuggleBtn: ".tuggle-btn", // DOM elemrnt (class or id)
        tuggleContent: ".tuggle-content", // DOM elemrnt (class or id)
        navLink: ".nav-link", // DOM elemrnt (class or id)
        state: "open", // Which (class or id) use to change 'nav' of page if will be the size to screen is less checkpoint.
        checkpoint: 860 // Size for screen width when we use mobile menu.
    };
    
    const responsiveNav = new ResponsiveNav(navOptions); // created new responsiveNav.
  
    // options for changeNavIfWindowScroll
    const changeNavIfWindowScrollOptions = {
        nav: ".main-nav", // DOM elemrnt (class or id)
        state: "active", // Which (class or id) use to change 'nav' of page if will be the scroll.
        heightActivateState: 15 // How many pixels will scroll page when we use the new state for nav.
    };
  
    // created new changeNavIfWindowScroll.
    const changeNavIfWindowScroll = new ChangeNavIfWindowScroll(
        changeNavIfWindowScrollOptions
    );
  
    // otptions for ScrollToAnchor
    const scrollToAnchorOptions = {
        nav: ".main-nav", // DOM elemrnt (class or id)
        topPosition: 0, // how many px to top position stop animation scroll (px)
        animationTime: 500 // animation scroll time (ms)
    };
  
    // create new ScrollToAnchor
    const scrollToAnchor = new ScrollToAnchor(scrollToAnchorOptions);

    // Highlight nav links based on users viewpoint
    navFunctions.highlightNavLinks();
}