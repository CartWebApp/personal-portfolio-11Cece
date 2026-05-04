document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById('bg-video1');
    const menu = document.getElementById('bg-video2');

   
    intro.onended = function() {
    
        intro.style.opacity = "0";
        
    
        menu.style.opacity = "1";
        
 
        menu.play();
    };
});