var buttonArray = ["pink", "purple", "black", "yellow"];
var queryURL = "http://api.giphy.com/v1/gifs/search?q=";
var key = "dc6zaTOxFJmzC";

var app = {

    apiCall : function(event){
        event.preventDefault();
        $.ajax({
            url : queryURL,
            method : "GET"
        }).done(function(e){
            app.populateButtons(e);
        });
    },

    populateButtons : function(arg){
        var results = arg.data;

         for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs").prepend(gifDiv);
    }







}