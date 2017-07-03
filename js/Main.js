var Main = {};

$(document).ready(function() {

  Mobile.init();
  Events.init();

  if(Mobile.checkIfMobile() == false) {
    Desktop.init();
  } else {
    $(body).addClass("mobile");
    Mobile.init();
  }

  if((typeof(Flavor)) !== "undefined") {
    Flavor.init();
  }

});

