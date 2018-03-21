$(document).bind('touchstart', handleTouchStart);
$(document).bind('touchend', handleTouchMove);
$(document).bind('keydown', handleKeyPress);

var xDown = null;
var startTime = null;

function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
    startTime = new Date().getTime();
};

function handleTouchMove(e) {
    if ( !xDown || !startTime) {
        return;
    }
    var xDiff = e.touches[0].clientX - xDown;
    var tDiff = new Date().getTime() - startTime;
    if (tDiff < 200) {
        var menuItems = $('.nav li').length-1;
        var activeIndex = $('.nav li').index($('.active'));

        if (xDiff > 500 && activeIndex < menuItems) {// right swipe
            $('.nav a:eq('+parseInt(activeIndex+1)+')').click();
        } else if (xDiff < 500 && activeIndex > 0) {// left swipe
            $('.nav a:eq('+parseInt(activeIndex-1)+')').click();
        }
    }
    xDown = null;
    startTime = null;
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
