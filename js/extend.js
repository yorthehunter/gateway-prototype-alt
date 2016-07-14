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

});