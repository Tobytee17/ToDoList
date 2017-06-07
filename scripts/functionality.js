var listStorage = [];
var x = 0;


function add() {
  if($("#input").val() == "") {
    alert("Please enter a task!")
  } else {
    //run through if statement to determine if entry already exist
      $(".container").append("<li class = 'well'>" + $("#input").val());
      listStorage[x] = $('#input').val();
      x+=1;
      console.log(listStorage);
    }
  }

$(document).on("click", ".well", function(){
  $(this).fadeOut(750, function () {  $(this).remove();})
});


/*else {
  if($('.well').html() == $('#input').val()) {
    alert('You already have this to do!')
  } */
