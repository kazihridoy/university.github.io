$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 1;
    var w = $('#feedback_slider').width() / show;
    var l = $('.slide').length;
    
    $('.feedback_slide').width(w);
    $('#feedback_slide_container').width(w * l)
    
    function slider() {
        $('.feedback_slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 4000);
    
    $('#feedback_slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 4000);
    });
});