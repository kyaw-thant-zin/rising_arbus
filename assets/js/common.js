// menu
$('.menu-trigger,.nav-list li a').on('click', function() {
    $('.menu-trigger').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.nav-list').toggleClass('toggle');
});