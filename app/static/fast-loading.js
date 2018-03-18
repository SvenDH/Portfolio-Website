function loadPage(url) {
    $.post(url).done(function(data) {
        //Change active menu menuitem
        $('.nav li.active').removeClass('active');
        var item = $('.nav a[href$="'+url+'"]').parent().addClass('active');
        if (item.length == 0){
            $('.nav a[href$="/index"]').parent().addClass('active');
        }
        //Change body content
        $('.body').html(data)
        $('.body').children().hide().fadeIn(500);
    });
}

$(document).ready(function() {
    $('.nav a').click(function(e){
        if (!('replaceState' in history)) return true
        if (e.which == 2 || e.metaKey || e.ctrlKey){
            return true
          }
        e.preventDefault();
        var url = $(this).attr('href');
        var li = $(this).parent();
        history.pushState(null, null, url);
        loadPage(url);
        return false
    });
    //Load correct page when going back and forth
    $(window).on('popstate', function(e) {
      loadPage(window.location.pathname);
    });
});
