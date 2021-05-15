var currentHours = new Date().getHours();
var currentDays = new Date().getDay();
console.log(currentDays);
console.log(currentHours);

if (11 <= currentHours && currentHours <22 && 1 <= currentDays && currentDays <= 4){
    document.getElementById("status-dot").style.backgroundColor = "green"
    document.getElementById("status-text").innerHTML= "Open"
}
else if(11 <= currentHours && currentHours <23 && 5 == currentDays){
    document.getElementById("status-dot").style.backgroundColor = "green"
    document.getElementById("status-text").innerHTML= "Open"
}
else if(12 <= currentHours && currentHours <23 && 6 == currentDays){
    document.getElementById("status-dot").style.backgroundColor = "green"
    document.getElementById("status-text").innerHTML= "Open"
}
else if(12 <= currentHours && currentHours <21 && 7 == currentDays){
    document.getElementById("status-dot").style.backgroundColor = "green"
    document.getElementById("status-text").innerHTML= "Open"
}
else{
    document.getElementById("status-dot").style.backgroundColor = "red"
    document.getElementById("status-text").innerHTML= "Closed"
}

jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww > 408) {
        $('#status').removeClass('status-responsive');
      } else if (ww <= 408 && ww >= 301) {
        $('#status').addClass('status-responsive');
      } else if (ww < 301) {
        $('#status').removeClass('status-responsive');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});     


