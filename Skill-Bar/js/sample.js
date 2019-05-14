$(document).ready(function () {
var offsetTop = $('.skill-area').offset().top;

    $(window).scroll(function () {
        var height = $(window).height();
        if ($(window).scrollTop() + height >= offsetTop) {
            jQuery('.skillbar').each(function () {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 3000);
            });
        }
    });
//skillbar
});
