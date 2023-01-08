// function handleAddTask() {
//     console.log("Handling the Add Task button.");
// }

// function doBindings() {
//     var button = document.getElementById("add-task");
//     button.onclick = handleAddTask;
// }

window.onload = function() {
    // do all the bindings here. :)
    var button = document.getElementById("add-task");
    button.onclick = function() {
        console.log("Handling the Add Task button.");
    };
};


// doBindings();