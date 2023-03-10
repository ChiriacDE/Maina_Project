/**
 * @type {ScrollToAnchor}
 */

export class ScrollToAnchor {
    constructor(options) {
        this.nav = options.nav; // Selector for navigation element
        this.topPosition = options.topPosition; // Offset from top of target element
        this.animationTime = options.animationTime; // Duration of animation in ms

        this._scrollToEventsListener();
    }

    _scrollToEventsListener() {
        // Find all anchor elements in navigation and add click event listener to each
        document.querySelectorAll(`${this.nav} a[href^="#"]`).forEach((el) => {
            el.addEventListener("click", (event) => {
                event.preventDefault();

                // Get target element based on href attribute of clicked anchor element
                const target = document.querySelector(el.getAttribute("href"));
                if (!target) return;

                // Calculate target position
                const targetTop = target.getBoundingClientRect().top + window.pageYOffset + this.topPosition;

                // Define animation parameters and start time
                const duration = this.animationTime;
                const startTime = performance.now();

                // Define animation function
                function step() {
                    const elapsed = performance.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = easeInOutQuad(progress);
                    const distance = targetTop - window.pageYOffset;
                    window.scrollTo(0, window.pageYOffset + (distance * ease));
                    if (progress < 1) requestAnimationFrame(step);
                }

                // Define easing function
                function easeInOutQuad(progress) {
                    return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                }

                // Start animation
                requestAnimationFrame(step);
            });
        });

        // Add click event listener to logo element
        const logoEl = document.querySelector('.logo');
        if (logoEl) {
            logoEl.addEventListener("click", (event) => {
                event.preventDefault();

                // Define animation parameters and start time
                const duration = this.animationTime;
                const startTime = performance.now();
                const distance = window.pageYOffset;

                // Define animation function
                function step() {
                    const elapsed = performance.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = easeInOutQuad(progress);
                    window.scrollTo(0, distance * (1 - ease));
                    if (progress < 1) requestAnimationFrame(step);
                }

                // Define easing function
                function easeInOutQuad(progress) {
                    return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                }

                // Start animation
                requestAnimationFrame(step);
            });
        }
    }
}
