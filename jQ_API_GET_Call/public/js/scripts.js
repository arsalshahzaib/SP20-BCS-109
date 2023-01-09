$(function() {
    loadGames();
});

function loadGames() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
        success: function(response) {
            // console.log(response);
            var todosL = $("#todo");
            todosL.empty();
            var count = 1;
            for (let index = 0; index <= response.length; index++) {
                todosL.append("<div><h3>Task " + count + ". " + response[index].title + "</h3><p>Completion = " + response[index].completed + "</p></div>");
                count++;
            }
        }
    });
}
