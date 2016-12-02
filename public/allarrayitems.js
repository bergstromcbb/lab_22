 $(function(){

  var saying = "";
  
  $.get('/api/objects', function(data){
    console.log(data);
    
    saying = data;

    for (var i = 0; i< saying.length; i++){
    
    $("#container").append('<div class="listing">' 
      + '<p class="title">' + saying[i] + '</p></br>' 
      + '</div>');
    
}

  });  
  
});