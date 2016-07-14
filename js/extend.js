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
    $("#submit-calendar-duration").text("Extend to Thursday, July 28th");
  })

  $("#cal-new").click(function(e){
    e.preventDefault();
  })

});