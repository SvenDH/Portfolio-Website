$(document).bind('touchstart', handleTouchStart);
$(document).bind('touchend', handleTouchMove);
$(document).bind('keydown', handleKeyPress);

var xStart = null;
var yStart = null;
var startTime = null;

function handleTouchStart(e) {
    xStart = e.changedTouches[0].pageX;
    yStart = e.changedTouches[0].pageY;
    startTime = new Date().getTime();
};

function handleTouchMove(e) {
    if ( !xStart || !yStart || !startTime) {
        return;
    }
    var touchobj = e.changedTouches[0]
    var xDiff = touchobj.pageX - xStart;
    var yDiff = touchobj.pageY - yStart;
    console.log(xDiff);
    var tDiff = new Date().getTime() - startTime;
    if (tDiff < 200 && Math.abs(yDiff) < 100) {
        var menuItems = $('.nav li').length-1;
        var activeIndex = $('.nav li').index($('.active'));

        if (xDiff < -150 && activeIndex < menuItems) {// right swipe
            $('.nav a:eq('+parseInt(activeIndex+1)+')').click();
        } else if (xDiff > 150 && activeIndex > 0) {// left swipe
            $('.nav a:eq('+parseInt(activeIndex-1)+')').click();
        }
    }
    xStart = null;
    yStart = null;
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
