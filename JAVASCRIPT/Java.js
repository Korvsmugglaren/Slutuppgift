
$(document).ready(function(){
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
  else if(12 <= currentHours && currentHours <21 && 0 == currentDays){
      document.getElementById("status-dot").style.backgroundColor = "green"
      document.getElementById("status-text").innerHTML= "Open"
  }
  else{
      document.getElementById("status-dot").style.backgroundColor = "red"
      document.getElementById("status-text").innerHTML= "Closed"
  }
});

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
    
    alterClass();
});     

function StartSwiper(){
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}

function myFunction(){
      var reset = "";
      var data = Datacheck();
      if(data=true){
          document.getElementById("namn").innerHTML = document.getElementById("Name").value;
          document.getElementById("tele").innerHTML = document.getElementById("Tel").value;
          document.getElementById("mail").innerHTML = document.getElementById("Email").value;
          document.getElementById("message").innerHTML = document.getElementById("msgbox").value;

          document.getElementById("confirm").innerHTML = "Meddelande skickat";

      }
      if(data=true){

          document.getElementById("Name").value = reset;
          document.getElementById("Tel").value = reset;
          document.getElementById("Email").value = reset;
          document.getElementById("msgbox").value = reset;

      }
  }
function Datacheck ()
{
      var validEntry = true;
      var n = document.getElementById("Name").value;
      
      if (n == "") {
      n.focus();
      validEntry = false;
      }
      n = document.getElementById("Tel").value;
      
      if (n == "") {
      n.focus();
      validEntry = false;
      }
      n = document.getElementById("Email").value;
      
      if (n == "") {
      n.focus();
      validEntry = false;
      }
      n = document.getElementById("msgbox").value;
      
      if (n == "") {
      n.focus();
      validEntry = false;
      }

      return validEntry;
  }
