

var animaux = [];

function addAnimal (name,country) {
	var animal = {
		'animal_name':name,
		'animal_country':country
	}
	animaux.push(animal);
}

$(".ajout_animal").on("click", function(e){
	e.preventDefault();
	addAnimal($(".name_input").val(),
		$(".country_input").val())
	renderAnimaux();
});

function renderAnimaux () {
	$(".animal").children().remove();
	for(var i = 0 ; i < animaux.length; i++) {
		$( ".animal" ).append("<li>"+"nom:"+animaux[i].animal_name+"=>"+"pays provenance:  "+animaux[i].animal_country+"</li>");
		console.log(animaux);
	}
}
