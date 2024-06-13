$(document).ready(function(){
  $("#hide").click(function(){
    $("#img").hide();
  });
  $("#show").click(function(){
    $("#img").show();
  });
});





$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn();
    $("#div3").fadeIn();
    $("#div4").fadeIn();
    $("#div5").fadeIn();
    $("#div6").fadeIn("slow");
    $("#div7").fadeIn(90000000);
  });
});



$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut();
    $("#div3").fadeOut();
    $("#div4").fadeOut();
    $("#div5").fadeOut();
    $("#div6").fadeOut("slow");
    $("#div7").fadeOut(90000000);
  });
});


$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle();
    $("#div3").fadeToggle();
    $("#div4").fadeToggle();
    $("#div5").fadeToggle();
    $("#div6").fadeToggle("slow");
    $("#div7").fadeToggle(90000000);
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeTo("slow",0.20);
    $("#div2").fadeTo("slow",0.17);
    $("#div3").fadeTo("slow",0.14);
    $("#div4").fadeTo("slow",0.11);
    $("#div5").fadeTo("slow",0.8);
    $("#div6").fadeTo("slow",0.5);
    $("#div7").fadeTo("slow",0.2);
  });
});

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});