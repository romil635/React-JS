$(function () {
    $("#btn1").click(function () {
        $("#demo").removeClass("box")
    })
})


$(function () {
    $("#btn2").click(function () {
        $("#demo").addClass("box-1")
    })
})


$(function () {
    $("#btn3").click(function () {
        $("#demo").toggleClass("box-1")
    })
})


$(function () {
    $("#btn1").click(function () {
        $("#demo").css(
            {
                  "background-color" :"crimson",
                  "height":"100px",
                  "border":"5px solid black"

                
            }
        )
    })
})

$(function(){
    $("#btn").click(function(){
        $(".bchild").parent().css({"background-color" :"orange"})
    })
})

$(function(){
    $("#btn").click(function(){
        $(".bchild").parents().css({"background-color" :"orange"})
    })
})

$(function(){
    $("#btn").click(function(){
        $(".bchild").parentsUntil(".divparent").css({"background-color" :"orange"})
    })
})


//  children , find

 $(function(){
        $("#btn").click(function(){
            $(".ulparent").children().css({"background-color" :"orange"})
        })
    })

 $(function(){
        $("#btn").click(function(){
            $(".divparent").find(".spanchild").css({"background-color" :"orange"})
        })
    })


    //  sibling , next , nextall , prev , prevall , preuntil

       $(function(){
            $("#btn").click(function(){
                $("div").siblings().css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").next().css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").nextAll().css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").nextUntil("span").css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").prev().css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").prevAll().css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").prevUntil("p").css({"background-color" :"orange"})
            })
        })

        $(function(){
            $("#btn").click(function(){
                $("div").last().css({"background-color" :"orange"})
            })
        })

        $(function(){
            $("#btn").click(function(){
                $("div").not(".heading").css({"background-color" :"orange"})
            })
        })


        $(function(){
            $("#btn").click(function(){
                $("div").eq(2).css({"background-color" :"orange"})
            })
        })

        $(function(){
            $("#btn").click(function(){
                $("div").filter(".heading").css({"background-color" :"orange"})
            })
        })