import { isWindowBottom } from "../functions.js";

// HIGHLIGHT NAVTAB BASED ON VIEWPOINTS SECTION
export function highlightNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    window.addEventListener('scroll', () => {
        // Loop through each section
        document.querySelectorAll('section').forEach((section) => {
        // Get the section's bounding rectangle
        const sectionRect = section.getBoundingClientRect();

        // Check if the section is in the viewport
        if (sectionRect.top <= 100 && sectionRect.bottom >= 0) {
            // Get the section's ID
            const sectionId = section.getAttribute('id');

            // Loop through each nav link and remove the active class
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');

                // Add the active class to the nav link that matches the section's ID
                if (navLink.getAttribute('href') === `#${sectionId}`) {
                    navLink.classList.add('active');
                } 
            });
        } 
    });
    

    // Do the same for the header and footer
    const headerRect = header.getBoundingClientRect()
    const footerRect = footer.getBoundingClientRect()
        // Remove highlight when the viewport is on the header, on the footer (speacially for mobile) or the user reaches the bottom of the window
        if (headerRect.top <= 0 && headerRect.bottom >= 100 || footerRect.top <= 100 && footerRect.bottom >= 0 || isWindowBottom()) { 
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');
            })
        }

    });
}

export function getMenuLinks() {
    // Find all sections with the class "menu-linked"
    const container = document.querySelector('body');
    const sections = container.querySelectorAll('section.menu-linked');
  
    // Map the sections to an array of objects with the title and URL
    const menuLinks = Array.from(sections).map((section) => ({
      title: section.querySelector('h2').textContent,
      url: section.id,
    }));
  
    return menuLinks;
}