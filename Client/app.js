(function($){
    function processForm( e ){
        e.preventDefault()//added this event, see what it does
    
        var value = {
        	title : this["title"].value,
        	director: this["director"].value,
            genre: this["genre"].value //added this, needs to lowercase to match lines below #ask tomorrow
        };
//console.log(e);//added this
console.log(value);//added this
//$.ajax()({ added this line, replaced post will comment out down to line 20, start new at line 24, figure out what to do with line 21 & 22 later.
    //url:"https://localhost:44325/api/movie", replaced this below at line 25
    //data:value, used info from the slide at line 26
    //crossDomain: true, took this out, as it does not appear in the slide, not added below
    //contentType: "application/json; charset=utf-8" //added this
    //contentType: "application/json",
 //type: 'post',//added this line, then added a comma outside the '' exact as line 27, with comma
    //dataType:"json" //added this, was redundant here, as already added below at 26.
//took out some brackets here
   // .done(function(data, status){//added this, then took this out to correct an error
console.log("data: " + data + "\n status: " + status) //check callback
//}) took these out to correct an error
$.ajax({ //added this like the slide
    url:"https://localhost:44325/api/movie", //added this like the slide show suggested by David
    dataType: "json", //added this
    type: "post", //as above
    success: function (data, textStatus,jQxhr){

    },


        
   // } took this out to correct an error
 
   // $('#my-form').submit( processForm );//need to get rid of the duplication; tried to take this out, to correct an erro, but not sure.
})(jQuery);
$(function () {
    $.get("https://localhost:44325/api/movie", function (data) {
        console.log(data);
        data.map(function (el) {
            $("#PrintHere").append(`<div class="movie"> 
            <h2>Title: ${el.title}</h2>
            <div>Director: ${el.director}</div>
            <div>Genre: ${el.genre}</div>
            </div><img src=""><br>`);
        })
        data.map(function (el) {
            $("#TableData").append(`<tr>
            <td style="color:red"><h4>${el.title}</h4></td>
            <td>${el.director}</td>
            <td>${el.genre}</td>
            </tr>`);
        })
    });
},}})//throwing an errgonna try to comment these out