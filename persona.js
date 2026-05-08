
document.addEventListener("DOMContentLoaded", () => {

    // setup video elements
    const intro = document.getElementById('bg-video1');
    const menu = document.getElementById('bg-video2');
   
    // when intro video ends, fade it out and fade in menu video
    intro.onended = function() {
    
        intro.style.opacity = "0";
        
    
        menu.style.opacity = "1";
        
 
        menu.play();
    };

    //setup button elements
    const aboutMeButton = document.getElementById('about-me-button');
    const resumeButton = document.getElementById('resume-button');
    const portfolioButton = document.getElementById('portfolio-button');
    const contactButton = document.getElementById('contact-button');

    //slide in nav buttons after menu video starts
    menu.onplay = function() {
        const buttons = [aboutMeButton, resumeButton, portfolioButton, contactButton];
        const baseDelay = 2000; // delay before first button starts sliding
        const staggerDelay = 150; // delay between each button
        
        buttons.forEach((button, index) => {
            setTimeout(() => {
                button.style.transform = "translateX(0) skew(-15deg) rotate(-5deg)";
            }, baseDelay + (index * staggerDelay));
        });
    }

    // add event listeners for buttons
    aboutMeButton.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
    
    resumeButton.addEventListener('click', () => {
        window.location.href = 'resume.html';
    });
    
    portfolioButton.addEventListener('click', () => {
        window.location.href = 'portfolio.html';
    });
    
    contactButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});