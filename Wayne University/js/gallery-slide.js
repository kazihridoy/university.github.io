$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 4;
    var w = $('#gallery_slider').width() / show;
    var l = $('.gallery_slide').length;
    
    $('.gallery_slide').width(w);
    $('#gallery_container_slide').width(w * l)
    
    function slider() {
        $('.gallery_slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 3000);
    
    $('#gallery_slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 3000);
    });
});
