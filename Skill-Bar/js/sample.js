$(document).ready(function () {

         if ($document.scrollTop() >= 270) {
            jQuery('.skillbar').each(function () {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 3000);
            });
        }
    });
//skillbar

