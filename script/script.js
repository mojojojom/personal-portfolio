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
