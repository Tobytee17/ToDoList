var listStorage = [];

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


$("#addButton").click(function() {

})

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

//check the storage list to see if a task has already been added
function duplicateValidation() {
    if ($.inArray($("#input").val().toLowerCase(), listStorage) != -1) {
        alert("That is already on your ToDo List!")
        return false;
    }
}

$(document).on("click", ".well", function() {
  $(this).css('text-decoration', 'line-through');
  $(this).css('background-color', '#95a5a6');
  $(this).children().css('background-color', '#95a5a6');
});

//allows for the deletion of a specific div when it is clicked on
$(document).on("click", "#closeBtn", function() {
    for (var x in listStorage) {
        if (listStorage[x] == $(this).siblings().html().toLowerCase()) {
            listStorage.splice(x, 1);
        }
    }
    //fade out animation on the clicked div
    $(this).parent().fadeOut(750, function() {
        $(this).remove();
    })
    console.log(listStorage);
});
