$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 1;
    var w = $('#visitors_slider').width() / show;
    var l = $('.slide_visite').length;
    
    $('.slide_visite').width(w);
    $('#visitor_slide_container').width(w * l)
    
    function slider() {
        $('.slide_visite:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 5000);
    
    $('#visitors_slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 5000);
    });
});
