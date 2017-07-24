$(document).ready(function() {

    // Preloader 
    //https://loading.io
    $('.preloader').delay(1000).fadeOut(300);

    // Плавный скролл
    //http://dontforget.pro/javascript/plavnyiy-skrolling-k-elementu-na-jquery/

    $('.go_to').click(function() { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });


});