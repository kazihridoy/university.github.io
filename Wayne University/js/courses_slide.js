$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 6;
    var w = $('#courses_slider').width() / show;
    var l = $('.courses_slide').length;
    
    $('.courses_slide').width(w);
    $('#courses_slide_container').width(w * l)
    
    function slider() {
        $('.courses_slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 2000);
    
    $('#courses_slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 2000);
    });
});