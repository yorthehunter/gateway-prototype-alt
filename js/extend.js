// Javascript for the extend returns prototype

$(function() {

  $("input[name='duration'], input[name='reason']").click(function(e){
    console.log("clicked")
  })

  $("#more-needed").click(function(e){
    e.preventDefault();
    $("#default-duration").hide();
    $("#calendar-duration").show();
  });

  $("#cal-initial").click(function(e){
    e.preventDefault();
    $("#cal-initial").hide();
    $("#cal-new").show();
    var newText = $.parseHTML("Extend to <br /> Thursday, July 28th");
    $("#submit-calendar-duration").html(newText);
  })

  $("#cal-new").click(function(e){
    e.preventDefault();
  })

});