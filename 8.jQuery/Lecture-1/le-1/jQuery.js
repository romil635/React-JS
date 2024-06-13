/* jQuery Syntax */

 $(document).ready(function(){
     $("p").click(function(){
         $("span").hide()
     })
 })


$(function(){
    $("p").click(function(){
        $("span").hide()
    })
})


$(function(){
    $("#btn1").click(function(){
        $("span").hide()
    })
})


$(function(){
    $("#btn2").click(function(){
        $("span").show()
    })
})


$(function(){
    $("#btn1").click(function(){
        $(".text").hide()
    })
})


$(function(){
    $("#btn2").click(function(){
        $(".text").show()
    })
})

$(function(){
    $(".text").click(function(){
        $(this).hide()
    })
})

$(function(){
    $("#btn2").dblclick(function(){
        $(".text").show()
    })
})

$(function(){
    $(".text").dblclick(function(){
        $(this).hide()
    })
})

$(function(){
    $('#btn1').click(function(){
        $(".box1").fadeIn()
        $(".box2").fadeIn("slow")
        $(".box3").fadeIn(2000)
        $(".box4").fadeIn(5000)
        $(".box5").fadeIn(8000)
    })
})


$(function(){
    $('#btn2').click(function(){
        $(".box1").fadeOut()
        $(".box2").fadeOut("slow")
        $(".box3").fadeOut(2000)
        $(".box4").fadeOut(5000)
        $(".box5").fadeOut(8000)
    })
})


$(function(){
    $('#btn3').click(function(){
        $(".box1").fadeToggle()
        $(".box2").fadeToggle("slow")
        $(".box3").fadeToggle(2000)
        $(".box4").fadeToggle(5000)
        $(".box5").fadeToggle(8000)
    })
})


$(function(){
    $('#btn4').click(function(){
        $(".box1").fadeTo()
        $(".box2").fadeTo("slow" , 0.15)
        $(".box3").fadeTo("slow" , 0.45)
        $(".box4").fadeTo("slow" , 0.75)
        $(".box5").fadeTo("slow" , 1)
    })
})

/* jQuery Slide Method */


$(function(){
    $('.navbar').click(function(){
        $(".nav").slideDown()
    })
})

$(function(){
    $('.navbar').click(function(){
        $(".nav").slideUp()
    })
})

$(function(){
    $('.navbar').mouseover(function(){
        $(".nav").slideDown()
    })
})