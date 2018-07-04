$(function () {

    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; 
    var lastMonth = dateObj.getMonth();
    var dayOfMonth = dateObj.getDate();
    var year = dateObj.getFullYear();

   function dateWeekAgo(){ 
    var yesterDate = dayOfMonth -7;    
    
   if(dayOfMonth <= 7){
    var remainderABS = function(){
    //gets absolute value of number so you can minus it from the previous month date
    return Math.abs(dayOfMonth -7);
    }
    
    var dateSevenDaysAgo;
 
switch(lastMonth) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:              
       dateSevenDaysAgo = 30 - remainderABS();
       break;
    case 4:
    case 6:
    case 9:
    case 11:
       dateSevenDaysAgo = 30 - remainderABS();
        break;        
        case 2:
        
        if(dayOfMonth <= 28){
         dateSevenDaysAgo = 28 - remainderABS();
        }else{
        //leap year
        dateSevenDaysAgo = 29 - remainderABS();
        }
        break;
    default:
        $("#near-asteroid-count").text("NASA we have a problem! The API must be down");
}
    
    return dateSevenDaysAgo;
      } 
      else{ return yesterDate;}
    }

    var singleOrDoubleDigitMonth = function(){
        if(month < 10){
        return "0" + month;
        }else{
        return month;
        }
        }
        
 var isLastMonth = function(){
     if (dayOfMonth <= 7) {
         return lastMonth;
     }
        else{singleOrDoubleDigitMonth();}
 }
    
    var todayDate = year + "-" + singleOrDoubleDigitMonth() + "-" + dayOfMonth;
    yesterdayDate = year + "-" + isLastMonth() + "-" + dateWeekAgo();

    // My Key from NASA is "PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX" 
    var asteroidURL = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" + yesterdayDate + "&end_date=" + todayDate + "&api_key=PmFsOBkLS9R3L1WYnp7sMzxFZWGWQF8TwdmYNpNX";
 
        $.getJSON(asteroidURL).then(function (asteroidNumber) {$("#near-asteroid-count").text(JSON.stringify(asteroidNumber.element_count, null, 0))});

});

