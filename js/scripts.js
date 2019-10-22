$(document).ready(function() {
  $(".clickable1").click(function(){
    $("#initial-hidden").slideToggle();
    $("#initial-showing").slideToggle();
  });

  $(".clickable2").click(function(){
    $("#initial-hidden2").slideToggle();
    $("#initial-showing2").slideToggle();
  });

});
