function Scroll() {
    var startY = $('.navbar').height();
    var pageH = $(document).height() - $(window).height();
    var scrollY = $(window).scrollTop();
    var menuItems = $('.nav li').length-1;
    var activeIndex = $('.nav li').index($('.active'));
    //Make navbar transparent at top
    if(scrollY > startY){
        $('.navbar').removeClass('transparent');
    }else{
        $('.navbar').addClass('transparent');
    }
    //Scroll background
    $('.body').animate({
        'background-position-x': parseInt(100*activeIndex/menuItems)+'%'
    }, {queue: false, duration: 500}).animate({
        'background-position-y': parseInt(100*scrollY/pageH)+'%'
    }, {duration: 0});

    //Change homeblock size
    $('.home-block').css('height', $(window).height()+'px');
}

$(document).ready(function() {
    $(window).on('scroll load resize', function(){
        Scroll();
    });
    $('.body').on('DOMSubtreeModified', function(){
        Scroll();
    });
});
