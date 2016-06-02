console.log("hello");

$(document).ready(function(){

	

	function getGifs(keyword){
		$.ajax({
			method: 'GET',
			url: 'http://api.giphy.com/v1/gifs/search?q=' + keyword + '&api_key=dc6zaTOxFJmzC'
		}).done(function(response){
			var gif = response.data;
			for(var i = 0; i < gif.length; i++){
				var gify = gif[i].images;
				$('.gifList').append(
					` <img src="` + gify.downsized.url + `"/> `
					)
			}
		})
	};



	$('#subButton').click(function(){
		// $('.gifList').remove();
		var keyword = $('#inputText').val();
		getGifs(keyword);
	});

});