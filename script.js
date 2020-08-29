//call to the recipe api
//call to the restaurant api
//toggle switch between restaurant and recipe
//check box for cuisine parameter, possible an array
//click func for search


let food = "indian"
let puppyUrl = "https://api.spoonacular.com/recipes/complexSearch?cuisine=" + food + "&apiKey=16c525231b8e44dab6169ec9d64da6e5"



$.ajax({
    url: puppyUrl,
    method: "GET",
    
}).then(function(response){
        console.log(response);


})     