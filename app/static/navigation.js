$(document).bind('touchstart', handleTouchStart);
$(document).bind('touchmove', handleTouchMove);
$(document).bind('keydown', handleKeyPress);

var xDown = null;

function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
};

function handleTouchMove(e) {
    if ( !xDown ) {
        return;
    }
    var xUp = e.touches[0].clientX;
    var xDiff = xDown-xUp;
    var menuItems = $('.nav li').length-1;
    var activeIndex = $('.nav li').index($('.active'));

    if (xDiff < 200 && activeIndex < menuItems) {// right swipe
        $('.nav a:eq('+parseInt(activeIndex+1)+')').click();
    } else if (xDiff > 200 && activeIndex > 0) {// left swipe
        $('.nav a:eq('+parseInt(activeIndex-1)+')').click();
    }
    xDown = null;
};

function handleKeyPress(e) {
    var menuItems = $('.nav li').length-1;
    var activeIndex = $('.nav li').index($('.active'));

    if (e.which == 39 && activeIndex < menuItems) {// right swipe
        $('.nav a:eq('+parseInt(activeIndex+1)+')').click();
    } else if (e.which == 37 && activeIndex > 0) {// left swipe
        $('.nav a:eq('+parseInt(activeIndex-1)+')').click();
    }
};
