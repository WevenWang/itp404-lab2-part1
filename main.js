let profileTemplateString = document.getElementById('template').innerHTML;
console.log(profileTemplateString);

let renderProfile = Handlebars.compile(profileTemplateString);

$('#loading').html('Loading...')
$.getJSON('https://thejsguy.com/teaching/2018/api/restaurants.json').then((items) =>{
	// console.log(restaurants);

	//repos is the key for the template/handler to recognize

	let renderedProfiles = renderProfile({restaurants: items.data
	});




	$('#results').append(renderedProfiles);
  $('#loading').html('')





});
