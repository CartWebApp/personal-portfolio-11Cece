    document.addEventListener("DOMContentLoaded", () => {

        // only run video/button logic if those elements exist (home page only)
        const intro = document.getElementById('bg-video1');
        const menu = document.getElementById('bg-video2');

        if (intro && menu) {
            intro.onended = function() {
                intro.style.opacity = "0";
                menu.style.opacity = "1";
                menu.play();
            };

            const aboutMeButton = document.getElementById('about-me-button');
            const resumeButton = document.getElementById('resume-button');
            const portfolioButton = document.getElementById('portfolio-button');
            const contactButton = document.getElementById('contact-button');

            menu.onplay = function() {
                const buttons = [aboutMeButton, resumeButton, portfolioButton, contactButton];
                const baseDelay = 2000;
                const staggerDelay = 150;

                buttons.forEach((button, index) => {
                    setTimeout(() => {
                        button.style.transform = "translateX(0) skew(-15deg) rotate(-5deg)";
                    }, baseDelay + (index * staggerDelay));
                });

                const homeTitle = document.getElementById('home-title');
                if (homeTitle) {
                    setTimeout(() => {
                        homeTitle.style.transform = "translateY(0) rotate(20deg)";
                    }, 1500);
                }
            };

            if (aboutMeButton) aboutMeButton.addEventListener('click', () => window.location.href = 'about.html');
            if (resumeButton) resumeButton.addEventListener('click', () => window.location.href = 'resume.html');
            if (portfolioButton) portfolioButton.addEventListener('click', () => window.location.href = 'portfolio.html');
            if (contactButton) contactButton.addEventListener('click', () => window.location.href = 'contact.html');
        }

        // carousel — only runs if the track exists on the page
        const track = document.getElementById('carousel-track');
        if (track) {
            const dots = document.querySelectorAll('.nav-dot');
            const btnLB = document.getElementById('btn-lb');
            const btnRB = document.getElementById('btn-rb');
            let current = 0;
            const total = document.querySelectorAll('.carousel-slide').length;

            function goTo(index) {
                current = (index + total) % total;
                track.style.transform = `translateX(-${current * 33.333}%)`;
                dots.forEach((d, i) => d.classList.toggle('active', i === current));
            }

            if (btnLB) btnLB.addEventListener('click', () => goTo(current - 1));
            if (btnRB) btnRB.addEventListener('click', () => goTo(current + 1));
        }
    });

    //About me page animation 
    document.addEventListener("DOMContentLoaded", () => {
        
        const aboutMe = document.getElementById('about-me-party');
        const resume = document.getElementById('resume-party');
        const portfolio = document.getElementById('portfolio-party');
        const backBtn = document.getElementById('back-btn');
        const writing = document.getElementById('writing-party');
    
        const buttons = [backBtn, aboutMe, resume, portfolio, writing];
        
        
        const baseDelay = 300; 
        const staggerDelay = 120;
    
        buttons.forEach((button, index) => {
            if (button) {
                setTimeout(() => {
                   
                    button.style.transform = "translateX(0) skew(-15deg)";
                    button.style.opacity = "1";
                }, baseDelay + (index * staggerDelay));
            }
        });
    
        
        if (aboutMe) aboutMe.addEventListener('click', () => window.location.href = 'myself.html');
        if (resume) resume.addEventListener('click', () => window.location.href = 'CART.html');
        if (portfolio) portfolio.addEventListener('click', () => window.location.href = 'Hobbies.html');
        if (writing) writing.addEventListener('click', () => window.location.href = 'writing.html');
    });

    //Resume Page Animation
    document.addEventListener("DOMContentLoaded", () => {
  const resume = document.querySelector('.resume');
  const downloadBtn = document.querySelector('.download-btn');

  if (resume) {
    setTimeout(() => {
      resume.classList.add('slide-in');
    }, 300);
  }

  if (downloadBtn) {
    setTimeout(() => {
      downloadBtn.classList.add('slide-in');
    }, 500);
  }
});

    //Contact Page Animation
  document.addEventListener("DOMContentLoaded", () => {
    const socialsInfo = document.querySelectorAll('.socials'); 

    const baseDelay = 300; 
        const staggerDelay = 180;


socialsInfo.forEach((info, index) => {
    if (info) {
      setTimeout(() => {
        info.classList.add('slide-in');
      }, baseDelay + (index * staggerDelay));
    }
  })
  });