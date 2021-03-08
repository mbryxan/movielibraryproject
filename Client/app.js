$(function () {
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
        };


    $('#my-form').submit( processForm );}
})(jQuery);
$(function () {
    $.get("https://localhost:44325/api/movie", function (data) {
        console.log(data);

        data.map(function (el) {  
            $("#PrintHere").append(`<div class="movie"> 
           <h2>Title: ${el.title}</h2>
           <h2>Director: ${el.director}</h2>
        <h2>Genre: ${el.genre}</h2><br>
        <div class="${el.movieId}">
        <input type="text" name="title" placeholder="Title" value="${el.title}" class="MovieTitle"/>
        <input type="text" name="director" placeholder="Director" value="${el.director}" class="MovieDirector"/>
        <input type="text" name="genre" placeholder="Genre" value="${el.genre}" class="MovieGenre"/>

        <button onclick="editMovie(${el.movieId})">Edit</button>
        </div>
            </div><br>`);
        })
        //data.map(function (el) {
         //   $("#TableData").append(`<tr>
        //    <td style="color:red">${el.title}</td>
        //    <td>${el.director}</td>
         //   <td>${el.genre}</td>
         //   </tr>`);
        //})
    });
})

//js function that can be called anywhere in code. Body of code is copy/pasted from above.This reload prevents the data from being copied again.
function ReloadMovieGrid(){
    $.get("https://localhost:44325/api/movie", function (data) {
        console.log(data);
        $("#PrintHere").html(""); //Clearing out div that contains the movies - https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript
        data.map(function (el) {  
            $("#PrintHere").append(`<div class="movie"> 
           <h2>Title: ${el.title}</h2>
           <h2>Director: ${el.director}</h2>
        <h2>Genre: ${el.genre}</h2><br>
        <div class="${el.movieId}">
        <input type="text" name="title" placeholder="Title" value="${el.title}" class="MovieTitle"/>
        <input type="text" name="director" placeholder="Director" value="${el.director}" class="MovieDirector"/>
        <input type="text" name="genre" placeholder="Genre" value="${el.genre}" class="MovieGenre"/>

        <button onclick="editMovie(${el.movieId})">Edit</button>
        </div>
            </div><br>`);

        })
    });
}
//this is the function added last night
function editMovie(movieId){

    var value = {
        title : $('.' + movieId + ' input:text')[0].value,
        director: $('.' + movieId + ' input:text')[1].value,
        genre: $('.' + movieId + ' input:text')[2].value //added this, needs to lowercase to match lines below #ask tomorrow
    }
//console.log allows me to see the values enter one by one
    console.log( $('.' + movieId + ' input:text')[0].value)
    console.log( $('.' + movieId + ' input:text')[1].value)
    console.log( $('.' + movieId + ' input:text')[2].value)

    $.ajax({ //added this like the slide
        url:"https://localhost:44325/api/movie/" + movieId, //added this like the slide show suggested by David
        contentType:'application/json',
        type: "put", //as above
        data: JSON.stringify(value),
        success: function (data, textStatus,jQxhr){
            ReloadMovieGrid(); 
        }
     });
}