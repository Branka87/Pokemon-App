$('form').on('submit', function(e){
	e.preventDefault();
	var pokemon = $('input[type=text]').val();
	var url = "http://pokeapi.co/api/v2/pokemon/" + pokemon;
	console.log(url);
	
	$.getJSON(url, function(data){
			var imageURI = data.sprites.front_default;
			$("#content").empty();
			$("#content").append("<h2>" + data.name.toUpperCase() + "</h2>");
			$("#content").append("<br /><img width='150px' src="+imageURI+"></img>");
			$("#content").append("<br /><div class='experience'><h3>Base Experience:</h3>" + " " + "<p>" + data.base_experience + "</p></div>");
			$("#content").append("<br /><div class='height'><h3>Height:</h3>" + " " + "<p>" + data.height + "</p></div>");
			$("#content").append("<br /><div class='weight'><h3>Weight:</h3>" + " " + "<p>" + data.weight + "</p></div>");
		
		
	});
			
			$("#content").empty();

	
	 // new URL for next GET request
	var color = "http://pokeapi.co/api/v2/pokemon-color/" + pokemon;
	console.log(color);

	
	// GET request to new URL
	$.getJSON(color, function(data2){
		console.log(data2.pokemon_species[0].name);
		species = data2.pokemon_species;
		console.log(species);
		var species = species;
		for(var j = 0; j < species.length; j++){
			console.log(species[j].name);
			$("#content").append("<li class='species-name'>"+species[j].name+"</li>");
		};
	
    });	


})
   