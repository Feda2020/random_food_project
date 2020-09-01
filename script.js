//call to the recipe api
//call to the restaurant api
//toggle switch between restaurant and recipe
//check box for cuisine parameter, possible an array
//click func for search

$("button").on("click", function(event){
    event.preventDefault();
    var citySearch= $("#citySearch").val();
var cityURL='https://developers.zomato.com/api/v2.1/cities?q='+citySearch;

$.ajax({
    url: cityURL,
    method: "GET",
    beforeSend:function (parameter){
        parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");
        
    }
    
  }).then(function(response) {
        
  
        var city= (response.location_suggestions[0].id)



        var cuisinesURL='https://developers.zomato.com/api/v2.1/cuisines?city_id='+city;

    $.ajax({
        url: cuisinesURL,
        method: "GET",
        beforeSend:function (parameter){
            parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");
            
        }
        
      }).then(function(response) {
           

        var american =(response.cuisines[1].cuisine.cuisine_id);
        var asian = (response.cuisines[2].cuisine.cuisine_id);
        var middleEastern = (response.cuisines[56].cuisine.cuisine_id);
        var mexican = (response.cuisines[55].cuisine.cuisine_id);
        var seafood = (response.cuisines[68].cuisine.cuisine_id);
        var italian = (response.cuisines[47].cuisine.cuisine_id);
        var pizza = (response.cuisines[62].cuisine.cuisine_id);
        var breakfast = (response.cuisines[11].cuisine.cuisine_id);
        var fastFood = (response.cuisines[33].cuisine.cuisine_id);

        var queryURL= 'https://developers.zomato.com/api/v2.1/search?entity_id='+city+'&entity_type=city&cuisines='+breakfast;

        $.ajax({
            url: queryURL,
            method: "GET",
            beforeSend:function (parameter){
                parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");
        
                }
    
                }).then(function(response) {
                    var randomRestaurant =Math.floor(Math.random() * 19)
                console.log(response.restaurants[randomRestaurant].restaurant.name);
                console.log(response.restaurants[randomRestaurant].restaurant.featured_image);
                console.log(response.restaurants[randomRestaurant].restaurant.menu_url);
                console.log(response.restaurants[randomRestaurant].restaurant.location.address);
                console.log(response.restaurants[randomRestaurant].restaurant.phone_numbers);
                

  
  
  
  
        });

    });
        
});
});
