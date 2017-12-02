(function(){

  const functionality = {

    init: function() {
      this.cacheDom();
      this.eventBinds();
    },

    cacheDom: function() {
      this.$el = $('#mainWrapper');
      this.$form = this.$el.find("#formWrapper");
    },

    eventBinds: function() {
      
    },

  };
  functionality.init();
})();





/*
var listStorage = [];

//Calls all validation functions and if input passes, add item to the list
function add() {
  if (emptyValidation() == false || alphaNumericalValidation() == false || duplicateValidation() == false) {
    return false;
  } else {
    listStorage.push($("#input").val().toLowerCase());
    console.log(listStorage);
    //run through if statement to determine if entry already exist
    $(".empty").prepend("<div class = 'well'>" + '<h3>' + $("#input").val() + '</h3>' + "<button type = 'button' class = 'btn' id ='closeBtn'> X </button" + "</div>");
    $("#input").val("");
  }
}

//Check to see if input is blank
function emptyValidation() {
  if ($("#input").val() == "") {
    alert("Please enter a task!")
    return false;
  }
}

//Checks for non-alphanumerical input to prevent HTML manipulation.
function alphaNumericalValidation() {
  var injectionValidation = /^[a-z0-9\s]+$/i;
  if (injectionValidation.test($("#input").val()) == false) {
    alert("Please provide alphanumerical input only please!")
    return false;
  }
}

//Check the storage list to see if a task has already been added
function duplicateValidation() {
  if ($.inArray($("#input").val().toLowerCase(), listStorage) != -1) {
    alert("That is already on your ToDo List!")
    return false;
  }
}

//Allows the enter key to be used to add items to the list
function enterKeyAdd() {
  if (event.keyCode == 13) {
    add();
  }
};

//Allows users to cross a task off their list before they delete it
$(document).on("click", ".well", function() {
  $(this).css('text-decoration', 'line-through');
  $(this).css('background-color', '#95a5a6');
  $(this).children().css('background-color', '#95a5a6');
});

//Allows for the deletion of a specific div when it is clicked on
$(document).on("click", "#closeBtn", function() {
  for (var x in listStorage) {
    if (listStorage[x] == $(this).siblings().html().toLowerCase()) {
      listStorage.splice(x, 1);
    }
  }
  //Fade out animation on the clicked div
  $(this).parent().fadeOut(750, function() {
    $(this).remove();
  })
  console.log(listStorage);
});
*/