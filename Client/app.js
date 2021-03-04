(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
        };



        
    }

    $('#my-form').submit( processForm );
})(jQuery);
$(function () {
    $.get("https://localhost:44325/api/movie", function (data) {
        console.log(data);
        data.map(function (el) {
            $("#PrintHere").append(`<div>
            <div>Title: ${el.title}</div>
            <div>Director: ${el.director}</div>
            <div>Genre: ${el.genre}</div>
            </div><br>`);
        })
        data.map(function (el) {
            $("#TableData").append(`<tr>
            <td style="color:red">${el.title}</td>
            <td>${el.director}</td>
            <td>${el.genre}</td>
            </tr>`);
        })
    });
})