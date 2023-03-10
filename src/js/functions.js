export function detectMobileView() {
    const body = document.querySelector('body');
    const isMobileView = window.innerWidth < 861;
  
    if (isMobileView) {
      body.classList.add('mobile-view');
    } else {
      body.classList.remove('mobile-view');
    }
}

export function getLastSectionBgColor() {
    // Get all the section elements in the document
    const sections = document.getElementsByTagName("section")
    
    // Get the last section element
    const lastSection = sections[sections.length - 1]
  
    // Get the background color of the last section element
    const bgColor = window.getComputedStyle(lastSection).getPropertyValue("background-color")
    
    return bgColor;
}

export function changeFooterFillColor(color) {
    // Get the element with the class name ".footer-wave-path"
    const footerWavePath = document.querySelector(".footer-wave-path")
  
    // Set the fill color of the element to the specified color
    footerWavePath.style.fill = color;
}

export function isWindowBottom() {
    const windowHeight = window.innerHeight;
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const scrollTop = window.pageYOffset || html.scrollTop || body.scrollTop;
    const scrollBottom = documentHeight - scrollTop - windowHeight;
    
    // Return true when so
    if (scrollBottom <= 0) {
      return true;
    }
}

export function setLogoHref() {
  const body = document.querySelector('body');
  let string;

  string = body.classList.contains('home') ? '#header' : '../../index.html';

  return string;
}
