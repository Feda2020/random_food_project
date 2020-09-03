//call to the recipe api
//call to the restaurant api
//toggle switch between restaurant and recipe
//check box for cuisine parameter, possible an array
//click func for search
$('.dropdown-trigger').dropdown();

//Click Function for random 
$(".restButton").on("click", function (event) {
    event.preventDefault();
    var citySearch = $(".city").val();
    var cityURL = 'https://developers.zomato.com/api/v2.1/cities?q=' + citySearch;


    var cuisine = $(this).text();
    $.ajax({
        url: cityURL,
        method: "GET",
        beforeSend: function (parameter) {
            parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");

        }

    }).then(function (response) {


        var city = (response.location_suggestions[0].id)



        var cuisinesURL = 'https://developers.zomato.com/api/v2.1/cuisines?city_id=' + city;

        $.ajax({
            url: cuisinesURL,
            method: "GET",
            beforeSend: function (parameter) {
                parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");

            }

        }).then(function (response) {

            var matchedCuisine = response.cuisines.find(function (foodType) {
                return foodType.cuisine.cuisine_name.toLowerCase() === cuisine.toLowerCase();
            })

            var cuisine_id = matchedCuisine.cuisine.cuisine_id;


            var queryURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + city + '&entity_type=city&cuisines=' + cuisine_id;

            $.ajax({
                url: queryURL,
                method: "GET",
                beforeSend: function (parameter) {
                    parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");

                }

            }).then(function (response) {
                var randomRestaurant = Math.floor(Math.random() * 19)
                let restName = $('<div>')
                restName.css({'color':'red', 'font-size':'30px'})
                restName.text(response.restaurants[randomRestaurant].restaurant.name)
                $(".dataRender").html(restName);

                let restIMG= $('<img id="dynamic">')
                restIMG.attr('src',response.restaurants[randomRestaurant].restaurant.featured_image)
                restIMG.attr({'height':'200'});
                $(".dataRender").append(restIMG);

                
               
                //$(".dataRender").append(response.restaurants[randomRestaurant].restaurant.menu_url);
                //$(".dataRender").append(response.restaurants[randomRestaurant].restaurant.location.address);
                //$(".dataRender").append(response.restaurants[randomRestaurant].restaurant.phone_numbers);

                console.log(response.restaurants[randomRestaurant].restaurant.name);
                console.log(response.restaurants[randomRestaurant].restaurant.featured_image);
                console.log(response.restaurants[randomRestaurant].restaurant.menu_url);
                console.log(response.restaurants[randomRestaurant].restaurant.location.address);
                console.log(response.restaurants[randomRestaurant].restaurant.phone_numbers);



            });

        });

    });
});

$(".btnRest").on("click", function (event) {
    event.preventDefault();
    var citySearch = $(".city").val();
    var cityURL = 'https://developers.zomato.com/api/v2.1/cities?q=' + citySearch;


    var cuisine = $(this).text();
    $.ajax({
        url: cityURL,
        method: "GET",
        beforeSend: function (parameter) {
            parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");

        }

    }).then(function (response) {


        var randCity = (response.location_suggestions[0].id)



        var randRestURL = 'https://developers.zomato.com/api/v2.1/search?entity_id=' + randCity + '&entity_type=city';



        $.ajax({
            url: randRestURL,
            method: "GET",
            beforeSend: function (parameter) {
                parameter.setRequestHeader("user-key", "f9550802c047aa378e5fcae18afc7d6b");

            }

        }).then(function (response) {
            var randRest = Math.floor(Math.random() * 19)
            console.log(response.restaurants[randRest].restaurant.name);
            console.log(response.restaurants[randRest].restaurant.featured_image);
            console.log(response.restaurants[randRest].restaurant.menu_url);
            console.log(response.restaurants[randRest].restaurant.location.address);
            console.log(response.restaurants[randRest].restaurant.phone_numbers);
        });





    });
});

//$("button").click(function(recSearch) {

//if($("cuisine") ) {
//let food = $("cuisine".text)
//}else{
//let cuisine 
//}

/*let food = "mexican"
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
//})*/







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