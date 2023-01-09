$(function() {
    loadGames();
});

function loadGames() {
    $.ajax({
        url: "type your URL here",
        method: "GET",
        success: function(response) {
            console.log(response);
        }
    });
}