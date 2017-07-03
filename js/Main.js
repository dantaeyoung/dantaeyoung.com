$ = global.jQuery = require('jquery');
_ = require('lodash');
Vue = require('vue');

gradientGenerator = require('../libs/gradientGenerator.js');

Mobile = require('./Mobile.js');
Desktop = require('./Desktop.js');
Events = require('./Events.js');
Vars = require('./Vars.js');


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

