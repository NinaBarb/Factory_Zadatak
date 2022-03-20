$(function(){
    $("#btnRight").click(slideRight)
    $("#btnLeft").click(slideLeft)
})

function slideRight(){
    $(':button').attr('disabled', true);

    $(".firstRow").append("<img src=' "+ $(".firstRow img").first().attr('src') +" ' />")

    $(".secondRow").append("<img src=' "+ $(".secondRow img").first().attr('src') +" ' />")

    $(".firstRow img").first().animate({marginRight: -$(".firstRow img").first().width()}, 500, function(){
        $(".firstRow img").first().remove()
        
    });

    $(".secondRow img").first().animate({marginRight: -$(".secondRow img").first().width()}, 500, function(){
        $(':button').attr('disabled', false);
        $(".secondRow img").first().remove()
    });
}

function slideLeft(){
    $(':button').attr('disabled', true);
    
    $(".firstRow").prepend("<img class=\"appear\" src=' "+ $(".firstRow img").last().attr('src') +" ' />")
    $(".firstRow img").first().animate({marginRight: $(".firstRow img").last().width()}, 500, function(){
        $(this).css("margin-right", "5px")
        $(this).animate({opacity: "100%"}, 500)
        $(".firstRow img").last().remove()
    });

    $(".secondRow").prepend("<img class=\"appear\" src=' "+ $(".secondRow img").last().attr('src') +" ' />")
    $(".secondRow img").first().animate({marginRight: $(".secondRow img").last().width()}, 500, function(){
        $(this).css("margin-right", "5px")
        $(this).animate({opacity: "100%"}, 500)
        $(".secondRow img").last().remove()
        $(':button').attr('disabled', false);
    });
}