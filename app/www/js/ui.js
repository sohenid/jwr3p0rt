$('.ui-menu-right').css('width', ($(window).width() < $(window).height() ? $(window).width() : $(window).height()));
$('.ui-menu-right').css('height', ($(window).height() > $(window).width() ? $(window).height() : $(window).width()));
$('.ui-menu-right').css('right', ($(window).width() < $(window).height() ? $(window).width() : $(window).height()) * -1);

$('.ui-btn-show-hide-menu-right').click(function() {
    if ($('.ui-btn-show-hide-menu-right').hasClass('closed')) {
        $('.ui-menu-right').css('display', 'block');
        $('.ui-btn-show-hide-menu-right').addClass('open');
        $('.ui-btn-show-hide-menu-right').removeClass('closed');
        $('body').animate({'right': ($(window).width() - 80), 'left': ($(window).width() - 80) * -1}, 500);
    } else {
        $('.ui-btn-show-hide-menu-right').addClass('closed');
        $('.ui-btn-show-hide-menu-right').removeClass('open');
        $('body').animate({'right': '0', 'left': '0'}, 500, function() {
            $('.ui-menu-right').css('display', 'none');
        });
    }
});