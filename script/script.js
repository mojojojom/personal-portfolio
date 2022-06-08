const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


jQuery( document ).ready(function() {
    var mywindow = jQuery(window);
    updateStyling(mywindow.scrollTop());
    console.log(mywindow.scrollTop());

    var mywindow = jQuery(window);
    var mypos = mywindow.scrollTop();
    let scrolling = false;
    window.addEventListener('scroll', function() {
        console.log('scrolling');
        mypos = mywindow.scrollTop();
        scrolling = true;
    });
    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            updateStyling(mypos);
        }
    }, 200);

    function updateStyling(mypos){
        if (mypos >= 20) {
            jQuery('#header-navbar').addClass('header-navscroll');
            jQuery('#header-navbar').addClass('nav-shadow');
            jQuery('#navbar-container').removeClass('nav-hr');
            jQuery('#banner-social-scroll').addClass('.banner-social-scroll');
            jQuery('#banner-social-scroll').addClass('fade-in');
            jQuery('#banner-social-scroll').removeClass('fade-out');
            jQuery('#banner-social-scroll').removeClass('scroll-none');
            jQuery('#banner-social-scroll').addClass('fade-right');
            jQuery('#banner-social-scroll').addClass('d-lg-block');
            jQuery('#banner-social-scroll').removeClass('fade-left');
            jQuery('#banner-socials').addClass('fade-out');
            jQuery('#banner-socials').removeClass('fade-in');
            jQuery('#banner-socials').addClass('scroll-none');
            jQuery('#banner-socials').removeClass('fade-right');
            jQuery('#banner-socials').addClass('fade-left');
        } else {
            jQuery('#header-navbar').removeClass('header-navscroll');
            jQuery('#header-navbar').removeClass('nav-shadow');
            jQuery('#navbar-container').addClass('nav-hr');
            jQuery('#banner-social-scroll').removeClass('.banner-social-scroll');
            jQuery('#banner-social-scroll').removeClass('fade-in');
            jQuery('#banner-social-scroll').addClass('fade-out');
            jQuery('#banner-social-scroll').addClass('scroll-none');
            jQuery('#banner-social-scroll').removeClass('fade-right');
            jQuery('#banner-social-scroll').removeClass('d-lg-block');
            jQuery('#banner-social-scroll').addClass('fade-left');
            jQuery('#banner-socials').removeClass('fade-out');
            jQuery('#banner-socials').addClass('fade-in');
            jQuery('#banner-socials').removeClass('scroll-none');
            jQuery('#banner-socials').addClass('fade-right');
            jQuery('#banner-socials').removeClass('fade-left');
        }
    }
});



/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    bannerSocials = document.getElementById('banner-socials')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




    const sr = ScrollReveal({
        duration:1000,
        reset: true
    });

    sr.reveal('.projects',{

    }, 500);

    sr.reveal('.contacts-social-links-container',{
        delay: 600
    },500);

ScrollReveal().reveal('.banner-sm-container',{delay:  300});
ScrollReveal().reveal('.banner-sm-bottom',{delay:  300});

ScrollReveal().reveal('.about-sub',{delay:  200});
ScrollReveal().reveal('.about-title',{delay: 200});
ScrollReveal().reveal('.about-hr',{delay: 300});
ScrollReveal().reveal('.about-dates',{delay: 400});
ScrollReveal().reveal('.about-overview',{delay: 500});
ScrollReveal().reveal('.about-stacks',{delay: 600});
ScrollReveal().reveal('.about-btn-container',{delay: 700});

ScrollReveal().reveal('.skill-title',{delay: 200});
ScrollReveal().reveal('.skill-left',{delay: 400});
ScrollReveal().reveal('.skill-right',{delay: 500});

ScrollReveal().reveal('.project-sub',{delay:  200});
ScrollReveal().reveal('.project-title',{delay: 200});
ScrollReveal().reveal('.project-hr',{delay: 300});
ScrollReveal().reveal('.project-dates',{delay: 400});
// ScrollReveal().reveal('.project-first',{delay: 500});
// ScrollReveal().reveal('.project-second',{delay: 600});
// ScrollReveal().reveal('.project-third',{delay: 700});
ScrollReveal().reveal('.project-btn-container',{delay: 800});

ScrollReveal().reveal('.contact-title',{delay: 200});
ScrollReveal().reveal('.contact-hr',{delay: 300});
ScrollReveal().reveal('.contact-sub',{delay:  400});
ScrollReveal().reveal('.contact-email-container',{delay:  500});

ScrollReveal().reveal('.footer-content',{delay:  500});



ScrollReveal().reveal('.projects-heading',{delay: 400});
ScrollReveal().reveal('.projects-title',{delay: 400});
ScrollReveal().reveal('.projects-date',{delay: 500});
ScrollReveal().reveal('.projects-description-container',{delay: 600});
ScrollReveal().reveal('.projects-link-container',{delay: 600});
ScrollReveal().reveal('.projects-img-container',{delay: 700});

ScrollReveal().reveal('.contacts-title',{delay: 200});
ScrollReveal().reveal('.contacts-hr',{delay: 300});
ScrollReveal().reveal('.contacts-sub',{delay: 400});
ScrollReveal().reveal('.contacts-connect',{delay: 500});
ScrollReveal().reveal('.contacts-form',{delay: 600});




setTimeout(function() {
    $('.loader-bg').fadeToggle();
},1500);