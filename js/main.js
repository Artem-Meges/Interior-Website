$(function(){

    $('.header__search-icon').on('click', function(){
        $('.header__search-bar').slideToggle();
    });

    $('.header-slider').slick({
        responsive: [
            {
                breakpoint: 1500,
                    settings: {
                        arrows: false,
                        dots: true,                 
                    }
            }
        ]     
    });

    $('.project__slider').slick({
        speed: 1000,
        responsive: [
            {
                breakpoint: 1500,
                    settings: {
                        arrows: false,
                        dots: true,                 
                    }            
            },
            // {
            //     breakpoint:  1310,
            //         settings: "unslick"
            // }
        ]            
    });

    $('.header__menu-btn').on('click', function() {
        $('.header__menu').slideToggle();
    });

});