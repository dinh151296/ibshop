$(document).ready(function() {
     /* ------------------------------------------------------------------------- *
    * back to top
    * ------------------------------------------------------------------------- */
    var btnToTop = $('#back-to-top');
    $(window).scroll(function(){
        if ($(window).scrollTop() > 300) {
            btnToTop.addClass('show');
        } else {
            btnToTop.removeClass('show');
        }
    });
    btnToTop.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({scrollTop:0}, '300');
    });

    // menu mobile
    var menuSP = $('.header__right');
    $('.hamburger-box').on('click', function () {
        $(this).removeClass('show');
        menuSP.addClass('show');
        $('body').addClass('hidden');
        $('.mobile-hambuger__close').addClass('show');
    });
    $('.mobile-hambuger__close').on('click', function() {
        $(this).removeClass('show');
        $('body').removeClass('hidden');
        menuSP.removeClass('show');
        $('.hamburger-box').addClass('show');
    }); 

    /* ------------------------------------------------------------------------- *
    * open modal form search
    * ------------------------------------------------------------------------- */
    $('.search-button').on('click', function (e) {
        e.stopPropagation();
        $('.iziModal').fadeIn('slow');

        $(document).click(function(event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
            if (!$(event.target).closest(".iziModal .modal__inner").length) {
                $("body").find(".iziModal").fadeOut('slow');
            }
        });
    });
    
});