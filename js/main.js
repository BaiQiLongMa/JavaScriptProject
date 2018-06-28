$(function () {

    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; 
    var day = dateObj.getUTCDate();
    var yesterDay = dateObj.getUTCDate() - 7;
    var year = dateObj.getUTCFullYear();
    var todayDate = year + "-0" + month + "-" + day;
    yesterdayDate = year + "-0" + month + "-" + yesterDay;

    // My Key from NASA is "PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX" 
    var asteroidURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + yesterdayDate + "&end_date=" + todayDate + "&api_key=PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX";

    //another idea would have been to put variables in the date for the asteroidURL then output the span of 7 days that the user can input, but focusing more on the table of the names in browser-asteroids.js
 
        $.getJSON(asteroidURL).then(function (asteroidNumber) {$("#near-asteroid-count").text(JSON.stringify(asteroidNumber.element_count, null, 0))});
});

