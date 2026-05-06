document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById('bg-video1');
    const menu = document.getElementById('bg-video2');
   
    intro.onended = function() {
    
        intro.style.opacity = "0";
        
    
        menu.style.opacity = "1";
        
 
        menu.play();
    };
});

const aboutMeButton = document.getElementById('about-me-button');
const resumeButton = document.getElementById('resume-button');
const portfolioButton = document.getElementById('portfolio-button');
const contactButton = document.getElementById('contact-button');