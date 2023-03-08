import { _initializeResponsiveNav } from "./navigation/ResponsiveNav.js";
import { foldPaperPlane } from "./paper-plane/paperPlaneFold";
import * as customFunctions from './functions';

// Execute the function when the window is resized
window.addEventListener('resize', customFunctions.detectMobileView);
// Execute the function when the page loads
customFunctions.detectMobileView();

// Call the navigation bar initializer function when the HTML DOM is ready
window.onload = _initializeResponsiveNav;

// Set menu bar logo hyperlink reference depending on the page
document.querySelector('.nav-link.logo').href = customFunctions.setLogoHref();

// Set footer logo hyperlink reference depending on the page
document.querySelector('.footer-logo-link').href = customFunctions.setLogoHref();

// Call clicker event listner for the newsletter button
foldPaperPlane();

// Change automatically the fill color of the footer
customFunctions.changeFooterFillColor(customFunctions.getLastSectionBgColor());

