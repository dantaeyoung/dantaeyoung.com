Site = {};


$(document).ready(function() {

  Mobile.init();
  Events.init();

  if(Mobile.checkIfMobile() == false) {
    Desktop.init();
  } else {
    $(body).addClass("mobile");
    Mobile.init();
  }


  Projects.init();

});

