//header.php
$(document).ready(function() {
    $('.navbar-nav .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();
    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideUp();
    });

    $('.navbar-nav .dropdown').click(function(e) {
        var $el = $(this).children('.dropdown-menu');
        if ($el.is(':visible')) {
            $el.slideUp();
        } else {
            $el.slideDown();
        }
    });
});