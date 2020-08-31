//call to the recipe api
//call to the restaurant api
//toggle switch between restaurant and recipe
//check box for cuisine parameter, possible an array
//click func for search
var cityURL="https://developers.zomato.com/api/v2.1/cities?q=san%20antonio"

$.ajax({
    url: cityURL,
    method: "GET",
    beforeSend:function (parameter){
        parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");
        
    }
    
  }).then(function(response) {
        console.log(response.location_suggestions[0].id);
  
        var city= (response.location_suggestions[0].id)



        var cuisinesURL='https://developers.zomato.com/api/v2.1/cuisines?city_id=304';

    $.ajax({
        url: cuisinesURL,
        method: "GET",
        beforeSend:function (parameter){
            parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");
            
        }
        
      }).then(function(response) {
            console.log(response.cuisines[0].cuisine.cuisine_id);
        
  
  
  
  
  
  
  
 
    
        
        var cuisines =(response.cuisines[0].cuisine.cuisine_id)

        var queryURL= 'https://developers.zomato.com/api/v2.1/search?entity_id='+city+'&entity_type=city&cuisines='+cuisines;

        $.ajax({
            url: queryURL,
            method: "GET",
            beforeSend:function (parameter){
                parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");
        
                }
    
                }).then(function(response) {
                console.log(response);
  
  
  
  
  
  
    });
    });
});

