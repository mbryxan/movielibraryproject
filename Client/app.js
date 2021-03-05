$(function () {
    function processForm( e ){
<<<<<<< HEAD
        var dict = {
        	Title : this["title"].value,
        	Director: this["director"].value
        };

=======
        //added this event, see what it does
    
        var value = {
        	title : this["title"].value,
        	director: this["director"].value,
            genre: this["genre"].value //added this, needs to lowercase to match lines below #ask tomorrow
        }

    console.log(value);//added this
 
    $.ajax({ //added this like the slide
        url:"https://localhost:44325/api/movie", //added this like the slide show suggested by David
        contentType:'application/json',
        type: "post", //as above
        data: JSON.stringify(value),
        success: function (data, textStatus,jQxhr){

        }
     });
  //need to get rid of the duplication; tried to take this out, to correct an erro, but not sure.
    e.preventDefault();
    }
>>>>>>> cff5a84fe4ce3a862243a84d89d4253810e810d6

 $('#my-form').submit( processForm );
})

<<<<<<< HEAD
        
    }

    $('#my-form').submit( processForm );
})(jQuery);
=======
>>>>>>> cff5a84fe4ce3a862243a84d89d4253810e810d6
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