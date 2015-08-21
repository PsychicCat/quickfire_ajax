$(document).ready(function() {



	var callback = function(response){
	var source   = $("#Ajax-template").html();
	var template = Handlebars.compile(source);
	$('.container').html(template(response));

		// response.forEach(function(elem){
		// 	console.log(elem);
		// 	$div = $('<div>');
		// 	$p = $('<p>');
		// 	$div.css('background-color', elem.value);
		// 	$p.text(elem.color);
		// 	$div.html($p);
		// 	$('.container').append($div);
		// });
	}



    $.ajax('data.json', {
        success: callback,
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });



})