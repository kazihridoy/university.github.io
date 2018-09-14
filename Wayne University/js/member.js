$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 7;
    var w = $('#slider').width() / show;
    var l = $('.slide').length;
    
    $('.slide').width(w);
    $('#slide-container').width(w * l)
    
    function slider() {
        $('.slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 10});
        });
    }
    var timer = setInterval(slider, 3000);
    
    $('#slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 3000);
    });
});
