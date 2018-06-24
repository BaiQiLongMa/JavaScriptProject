$(function () {

    // My Key from NASA is "PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX" 
    var asteroidURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-06-16&end_date=2018-06-23&api_key=PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX";

    //another idea would have been to put variables in the date for the asteroidURL then output the span of 7 days that the user can input, but focusing more on the table of the names in browser-asteroids.js

    $.ajax({
        type:"GET",
        url: asteroidURL,
        success: function(asteroidNumber){          
            $("#near-asteroid-count").text(JSON.stringify(asteroidNumber.element_count, null, 0));
        }
    });
});



/*Question 1:
 when you throw this url into Postman, "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-06-16&end_date=2018-06-23&api_key=PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX";
 the return for  "near_earth_objects" reads: 

 "near_earth_objects": {
     "2018-06-22": [
         {...}
     ]
         "2018-06-21": [
             {...}
         ]

 Since near_earth_objects is not an array, and a name that changes, how would i iterate through the objects as i believe near_earth_objects[i] with a loop condition wont work?
 */