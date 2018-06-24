$(function () {

    // My Key from NASA is "PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX" 
    var browseAsteroidURL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX";


    $.ajax({
        type: "GET",
        url: browseAsteroidURL,
        success: function(resultAsteroid){           
          var displayResources = $('#asteroidsNamesResults');
          var output="<table><thead><tr><th>Name</th><th>Asteroid URL</th><th>Is It Hazardous</th></thead><tbody>";
          for (var i in resultAsteroid)
          {
          output+="<tr><td>" + resultAsteroid.near_earth_objects[i].name + "</td><td>" + resultAsteroid.near_earth_objects[i].nasa_jpl_url + "</td><td>" + resultAsteroid.near_earth_objects[i].is_potentially_hazardous_asteroid + "</td></tr>";
          }
          output+="</tbody></table>";
          displayResources.html(output);
          $("table").addClass("table");
      }
      });
    });
      
/*Question 2:
I'm considering pushing the url to the iframe .on('click,..)
but will need a little help with it tomorrow as it will require upon resultAsteroid being returned having the resultAsteroid.near_earth_objects[i].nasa_jpl_url 
being clickable to then force the source to the iframe which I started below

     function ReturnAsteroidURL(){
         return result.nasa_jpl_url;
         }
        $("#showAsteroid").src = ReturnAsteroidURL();
*/

