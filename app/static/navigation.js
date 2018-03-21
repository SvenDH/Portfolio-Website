$(document).bind('touchstart', handleTouchStart);
$(document).bind('touchmove keypress', navigate);

var xDown = null;

function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
};

function navigate(e) {
    var xUp = e.touches[0].clientX;
    var xDiff = xDown-xUp;
    var menuItems = $('.nav li').length-1;
    var activeIndex = $('.nav li').index();

    if ((e.which == 39 || xDiff < 50) && activeIndex < menuItems) {// right swipe
        $('.nav a:eq('+parseInt(activeIndex+1)+')').click();
    } else if ((e.which == 37 || xDiff > 50) && activeIndex > 0) {// left swipe
        $('.nav a:eq('+parseInt(activeIndex-1)+')').click();
    }
    xDown = null;
};
