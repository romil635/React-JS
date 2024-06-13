//jquery animatetion

// -------------------- alert print---------------------
$(function(){
        $("#btn").click(function(){
            $("#demo").show(1000,function(){
     alert('show action')
            })
        })
})


// --------------- animation with color chenge----------------------------------


$(function(){
    $("#btn").click(function(){
        $("#demo").animate({
             left:"500px",
             fonstSize:"30px",
        },
 5000,function(){
    $("#demo").css("backgroung-color" , "orange")
        })
    })
})


// ------------------------- top bottom left rigth--------------------

$(function(){
    $("#btn").click(function(){
        $("#demo").animate({height:"400px"},2000)
        $("#demo").animate({width:"400px"},2000)
        $("#demo").animate({height:"100px"},2000)
        $("#demo").animate({width:"100px"},2000)
    })
})

// ---------------------  slidedown stop -----------
$(function(){
    $("#demo").click(function(){
        $("#panel").slideDown(2000)
    })
})

$(function(){
    $("#btn").click(function(){
        $("#panel").stop()
    })
    })

    $(function(){
        $("#demo").click(function(){
            $("#panel").slideDown(2000)
            $("#panel").slideDown(2000)
            $("#panel").fadeIn(2000)
            $("#panel").fadeOut(2000)
        })
    })


//   ----------------  text,content , inerhtml diffrent
//   innerhtml : paragraph maa anadar j tag hoy te bhi show thay
//    contenttaxt : khali paragraph no content show thay tag name no na thay
//  text : kai j show no thay dont effect to ani other tag

console.log(document.getElementById("panel").innerHTML);
console.log(document.getElementById("panel").textContent);
console.log(document.getElementById("panel").innerText);

//  ------------------------------ html get method

// -------only text
$(function(){
    $("#btn").click(function(){
        alert($("#panel").text())
    })
})


//   ------- tag and text
    $(function(){
            $("#btn").click(function(){
                alert($("#panel").html())
            })
        })
    

//  on click get value-----------------------
    $(function(){
        $("#btn").click(function(){
            $("#user").val("hello world")
        })
    })

    //   add to back------------------------------------------
    $(function(){
        $("#btn").click(function(){
            $("#panel").append("hello world")
        })
    })

    //    add to front------------------------

    $(function(){
        $("#btn").click(function(){
            $("#panel").prepend("hello world")
        })
    })


     $(function(){
        $("#btn").click(function(){
            $("#panel").after("hello world")
        })
    })

     $(function(){
        $("#btn").click(function(){
            $("#panel").before("hello world")
        })
    })

     $(function(){
         $("#btn").click(function(){
              $("#panel").remove()
         })
     })

     $(function(){
         $("#btn").click(function(){
            $("#panel").empty()
         })
     })











