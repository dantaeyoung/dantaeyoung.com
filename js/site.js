site = {};


$(document).ready(function() {

    mobile.init();
    events.init();

    if(mobile.checkIfMobile() == false) {
      desktop.init();
    } else {
      $(body).addClass("mobile");
      mobile.init();
    }
});

