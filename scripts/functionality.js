
function add() {
  if($("#input").val() == "") {
    alert("Please enter a task!")
  } else {
   $(".container").append("<div class = 'well'>" + $("#input").val());
  }
}

$(document).on("click", ".well", function(){
  $(this).fadeOut(function () {  $(this).remove();})
});
