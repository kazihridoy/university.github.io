$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 1;
    var w = $('#nav_slider').width() / show;
    var l = $('.nav_slide').length;
    
    $('.nav_slide').width(w);
    $('#nav_slide_container').width(w * l)
    
    function slider() {
        $('.nav_slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 5000);
    
    $('#nav_slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 5000);
    });
});
