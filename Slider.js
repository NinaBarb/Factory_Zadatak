$("#btnRight").click(slideRight)
$("#btnLeft").click(slideLeft)

var rightImg = $('.myCarousel').last()

function slideRight(){
    findRightImg()
    $(".myCarousel").prepend("<img src=' "+ $(".myCarousel img").last().attr('src') +" ' />")
    $(".myCarousel img").last().remove()
    $(".myCarousel img").each(function(index){
        $(this).animate({ right: $(rightImg).width() + $(".myCarousel").offset().left}, index*500+500);
    });
    
    isInViewport()
}

function slideLeft(){
    findRightImg()
    $(".myCarousel").append("<img src=' "+ $(".myCarousel img").first().attr('src') +" ' />")
    $($(".myCarousel img").get().reverse()).each(function(index){
        $(this).animate({ left: -$(rightImg).width() - $(".myCarousel").offset().left}, index*500+500);
    });
    $(".myCarousel img").first().remove()
    isInViewport()
}

function findRightImg(){
      $(".myCarousel img").each(function(){
        if($(this).offset().left>$(rightImg).offset().left){
            rightImg=this
        }
    });
}

function isInViewport() {
    const contaier = $(".myCarousel").offset().top + $(".myCarousel").height()
    
    $(".myCarousel img").each(function(){
        if(($(this).offset().top + $(this).height())>contaier){
            $(this).remove()
        }
    });
}