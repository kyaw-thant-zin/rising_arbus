$('.menu-trigger,.nav-list li a').on('click', function() {
    $('.menu-trigger').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.nav-list').toggleClass('toggle');
});

jQuery(function() {
    var windowWidth = $(window).width();
    var headerHight = 100;
    jQuery('a[href^=#]').click(function() {
        var speed = 1000;
        var href = jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

jQuery(function($) {
    if ($(window).width() > 767) {
        $(window).on("scroll", function() {

            scrollHeight = $(document).height();
            scrollPosition = $(window).height() + $(window).scrollTop();
            footHeight = $("footer").innerHeight();
            if (scrollHeight - scrollPosition <= footHeight) {
                $(".top-entry").css({
                    "bottom": "250px"
                });
            } else {
                $(".top-entry").css({
                    "bottom": "20px"
                });
            }
        });
    }
});