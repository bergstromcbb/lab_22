    

var saying = "";
var picture = "";

	$.get('/api/randomshit', function(data){
		console.log(data);

		saying = data;
	});  

	$.get('/api/randompic', function(data){
		console.log(data);

		picture = data;
	});  

setInterval(function(){
	

	$.get('/api/randomshit', function(data){
		console.log(data);

		saying = data;
	});  

	$.get('/api/randompic', function(data){
		console.log(data);

		picture = data;
	});  	


	$("#container").html('<div class="listing">' 
		+ '<img class="pic" src="' + picture +'"/>'
		+ '<p class="title">' + saying + '</p>' 
		+ '</div>');
	$("#pic").animate({opacity: 0.6})
}, 5000); 