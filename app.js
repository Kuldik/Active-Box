$(function() { // Записиь позволяет дождатся загрузки всего документа, и только тогда выполнять какие-либо действия
    
    // fixed header
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();// height - без padding / innerHeight - c padding
    let scrollPos = $(window).scrollTop(); // При перезагрузке сайта показывает текущую высоту

    checkScroll(scrollPos, introH); // Необходимо для фиксации интро

    $(window).on('scroll resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop(); // Показывается высота в консоле по мере прокрутки сайта

        checkScroll(scrollPos, introH)
    });

    function checkScroll(scrollPos, introH) {
        if(scrollPos >  introH ) {
            header.addClass('fixed');
        }  else {
            header.removeClass('fixed');
        }
    }

    // Smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault(); // отменяет стандартное действие при клике

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top //показывает количество пикселей от верха страницы до указанного блока

        nav.removeClass('show') // Необходми для того чтобы меню при нажатии проапало

        $('html, body').animate({ //анимация для скролла
            scrollTop: elementOffset - 65 // необходми для создания отступа для блока
        }, 750); // указывая скорость прокрутки анимации скролла
    });

    
    // Nav Toggle
    let nav = $('#nav');
    let navToggle = $('#navToggle');

    navToggle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass('show');
    });


    // Clients https://kenwheeler.github.io/slick/
    let slider = $('#clientsSlider');
    slider.slick({
        infinite: true, //Если элементы заканчиваются, то они начинаются заново
        slidesToShow: 1, // Количетсво слайдов
        slidesToScroll: 1, // Сколько будем скролить слайдов при клике
        fade: true, // Затемнение отзывов, при значении false происходит стандартное перемещение
        arrows: false, dots: false // Убираем стрелки
    });

    
});

