
function add() {
  if($("#input").val() == "") {
    alert("Please enter a task!")
  } else {
   $(".container").append("<div class = 'well' onclick= 'remove()'>" + $("#input").val())
  }
}

  //alert();


function remove() {
  alert("It will go soon");
}
