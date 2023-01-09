$(function() {
    loadGames();
});

function loadGames() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "GET",
        success: function(response) {
            console.log(response);
        }
    });
}
