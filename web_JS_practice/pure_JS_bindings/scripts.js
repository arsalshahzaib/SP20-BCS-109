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
    button.onclick = handleAddToDo;
};

function handleAddToDo() {
    var newTODO = document.getElementById("add-todo").value;
    var ToDo = document.getElementById("todo-list");
    var newTask = document.createTextNode(newTODO);
    var newLI = document.createElement("li");
    newLI.appendChild(newTask);
    ToDo.appendChild(newLI);
}

function handleDelete(e) {
    var tgt = e.target;
    var li = tgt.parentNode;
    li.parentNode.removeChild(li);
}
// doBindings();
