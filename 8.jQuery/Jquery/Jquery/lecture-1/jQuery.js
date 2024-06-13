//  jquery syntex 

// $(document).ready(function(){
//     $("p").click(function(){
//         $("span").hide()
//     })
// })


//   $(function(){
//     $("p").click(function(){
//         $("span").hide()
//     })
//   })


// ----------------  span hide or show  -----------------
// $(function(){
//     $("#btn01").click(function(){
//         $("span").hide()
//     })
// })

// $(function(){
//     $("#btn02").click(function(){
//         $("span").show()
//     })
// })

//  ----------------hiden for text------------
// $(function(){
//     $("#btn01").click(function(){
//         $(".text").hide()
//     })
// })

//   $(function(){
//     $("#btn02").click(function(){
//         $(".text").show()
//     })
//   })

// $(function(){
//     $(".text").click(function(){
//         $(this).show()
//     })
// })


// -------------- hide for dblclick--------------------

// $(function(){
//     $("#btn01").dblclick(function(){
//         $(".text").hide()
//     })
// })

//   $(function(){
//     $("#btn02").dblclick(function(){
//         $(".text").show()
//     })
//   })


// ------------------ img show or hide----------

// $(function(){
//     $("#001").click(function(){
//         $("img").hide() 
//     })
// })

// $(function(){
//     $("#002").click(function(){
//         $("img").show()
//     })
// })

// -------------------- fade in ,out , toggle , to -----------

// $(function(){
//     $("#btn1").click(function(){
//         $(".box-1").fadeIn()
//         $(".box-2").fadeIn("slow")
//         $(".box-3").fadeIn("fast")
//         $(".box-4").fadeIn(2000)
//         $(".box-5").fadeIn(3000)
//     })
// })
 
//  $(function(){
//     $("#btn2").click(function(){
//         $(".box-1").fadeOut()
//         $(".box-2").fadeOut("slow")
//         $(".box-3").fadeOut(2000)
//         $(".box-4").fadeOut("fast")
//         $(".box-5").fadeOut(3000)
//     })
//  })
//  $(function(){
//     $("#btn3").click(function(){
//         $(".box-1").fadeToggle()
//         $(".box-2").fadeToggle("fast")
//         $(".box-3").fadeToggle("fast")
//         $(".box-4").fadeToggle("slow")
//         $(".box-5").fadeToggle("slow")
//     })
//  })

//  $(function(){
//     $("#btn4").click(function(){
//         $(".box-1").fadeTo("fast",0.10)
//         $(".box-2").fadeTo("slow" ,0.5)
//         $(".box-3").fadeTo("slow" , 0.25)
//         $(".box-4").fadeTo("fast" ,0.35)
//         $(".box-5").fadeTo("fast",0.15)
//     })
//  })
 
//  Slide Method 

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
        $(".nav").slideToggle()
    })
})




















































