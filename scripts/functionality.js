var listStorage = [];

function add() {
    var injectionValidation = /^[a-z0-9\s]+$/i;
    if ($("#input").val() == "") {
        alert("Please enter a task!")
        return false;
    }
    //Checks for non-alphanumerical input to prevent HTML manipulation.
    if(injectionValidation.test($("#input").val()) == false) {
        alert("Please provide alphanumerical input only please!")
        return false;
    }
    //check the storage list to see if a task has already been added
    if ($.inArray($("#input").val().toLowerCase(), listStorage) != -1) {
        alert("That is already on your ToDo List!")
    } else {
        listStorage.push($("#input").val().toLowerCase());
        console.log(listStorage);
        //run through if statement to determine if entry already exist
        $(".container").append("<li class = 'well'>" + $("#input").val());
        $("#input").val("");
    }
}

//allows for the deletion of a specific div when it is clicked on
$(document).on("click", ".well", function() {
    for (var x in listStorage) {
        if (listStorage[x] == $(this).html()) {
            listStorage.splice(x, 1);
        }
    }
    //fade out animation on the clicked div
    $(this).fadeOut(750, function() {
        $(this).remove();
    })
    console.log(listStorage);
});
