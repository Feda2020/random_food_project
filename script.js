//call to the recipe api
//call to the restaurant api
//toggle switch between restaurant and recipe
//check box for cuisine parameter, possible an array
//click func for search



// event listener for dropdown button
//document.addEventListener('DOMContentLoaded', function() {
    //var elems = document.querySelectorAll('.dropdown-trigger');
   // var instances = M.Dropdown.init(elems, options);
  // });

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

let food = "chinese"
let spoonUrl = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + food + "&apiKey=16c525231b8e44dab6169ec9d64da6e5"



$.ajax({
    url: spoonUrl,
    method: "GET",
    
}).then(function(response){
    console.log(response.results);
    let recIndex = Math.floor(Math.random() * 10)
    //console.log(response.results[recIndex].id);
    
    
    let recId = response.results[recIndex].id;
    console.log(recId);
    let recTitle = $("<div>");
    console.log(response.results[recIndex].title);
    let recImg = $("<img>");
    console.log(response.results[recIndex].image);



    let recipeUrl = "https://api.spoonacular.com/recipes/" + recId + "/information?includeNutrition=false&apiKey=16c525231b8e44dab6169ec9d64da6e5"
    $.ajax({
        url: recipeUrl,
        method: "GET",
        
    }).then(function(recipe){
        console.log(recipe);

        for( i= 0; i < (recipe.extendedIngredients).length; i++)
        console.log(recipe.extendedIngredients[i].originalString);

        let recIng = $("<div>")


        
        console.log(recipe.instructions);
        let recIns = ("<div>");
    })

    

    
    
    



})







//$("#searchBtn").on("click", function(){

    //let keyWord = $("#searchTerm").val();
    //let f1 = $("#startYear").val();
    //let f2 = $("#endYear").val();
    //let amount = $("#numberOfRecords").val();
    //let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + keyWord + "&begin_date=" + f1 + "&end_date=" + f2 + "&api-key=aoVtwYPwDHAehwCglsYlXc4zmWRkeH6u";
    
    
    //need a var for queryURL
    //need to get a handle on the key word for searching
    //handleon date range
    //need to figure out year parameters
    //need a for loop to cycle though and produce number of articles selected
    


