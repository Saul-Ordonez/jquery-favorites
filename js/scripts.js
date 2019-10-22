$(document).ready(function() {
  $(".clickable1").click(function(){
    $("#initial-hidden").slideToggle();
    $("#initial-showing").slideToggle();
  });

  $(".clickable2").click(function(){
    $("#initial-hidden2").slideToggle();
    $("#initial-showing2").slideToggle();
  });

  $(".clickable3").click(function(){
    $("#initial-hidden3").slideToggle();
    $("#initial-showing3").slideToggle();
  });

  $(".clickable4").click(function(){
    $("#initial-hidden4").slideToggle();
    $("#initial-showing4").slideToggle();
  });

  $("#font-change").click(function(){
    $("body").addClass("font-to-serif");
  });

  $("#img-change").click(function(){
    $("img").addClass("img-shape");
  });

  $("#change-reset").click(function(){
    $("body").removeClass();
    $("img").removeClass();
    console.log("test")
  });
});
