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
            for (let index = 0; index < response.length; index++) {
                todosL.append("<div><h3>Title " + index + ". " + response[index].title + "</h3></div>");
            }
        }
    });
}
