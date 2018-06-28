$(function () {

    // My Key from NASA is "PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX" 
    var browseAsteroidURL = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX";


    $.getJSON(browseAsteroidURL).then(function (resultAsteroid) {
        var nearEarthObjects = Object.keys(resultAsteroid.near_earth_objects).map(key => resultAsteroid.near_earth_objects[key]);
        var displayResources = $('#asteroidsNamesResults');
       
        var output="<table class=\"table table-bordered\"><thead><tr><th>Name</th><th>Asteroid URL</th><th>Is It Hazardous</th></thead><tbody>";
        for (var i=0; i < nearEarthObjects.length; ++i)
        {
            var isHazardous = function(){
                if(nearEarthObjects[i].is_potentially_hazardous_asteroid ){
                    return "YES";
                } else{
                    return "No, Yay!";
                }
            }
            output+="<tr scope=\"row\"><td>" + nearEarthObjects[i].name + "</td><td>" + "<a href=\"" + nearEarthObjects[i].nasa_jpl_url + "\" target=\"_blank\">" + nearEarthObjects[i].nasa_jpl_url + "<\a>" + "</td><td>" + isHazardous() + "</td></tr>";
        }
        output+="</tbody></table>";
        displayResources.html(output);
    });
    $('a[href=\"nearEarthObjects[i].nasa_jpl_url\"]').click(function(){
        window.open(this.href);
        return false;
    });
});
      