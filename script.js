//call to the recipe api
//call to the restaurant api
//toggle switch between restaurant and recipe
//check box for cuisine parameter, possible an array
//click func for search


let food = "mexican"
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
    let recTitle = response.results[recIndex].title;
    console.log(recTitle);
    let recImg = response.results[recIndex].image;
    console.log(recImg);

    //console.log(recTitle);
    
    //recTitle.text(JSON.stringify(response.results[recIndex].title))
    //var questIndex = Math.floor(Math.random() * questLog.length);
    //displayQuest = questLog[questIndex];
    //questionEl.innerText = displayQuest.q;



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
    



  