    

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

$("#pic").animate({opacity: 1.0,}, 4000);

setInterval(function(){
	

	$.get('/api/randomshit', function(data){
		console.log(data);

		saying = data;
	});  

	$.get('/api/randompic', function(data){
		console.log(data);

		picture = data;
	});  	


	$("#container").html(
		'<img id="pic" src="' + picture +'"/>'
		+ '<p class="title">' + saying + '</p>' 
		);

	$("#pic").animate({opacity: 1.0,}, 4000)

}, 4000); 