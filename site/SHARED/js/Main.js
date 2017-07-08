$ = global.jQuery = require('jquery');
jqueryTransit = require('jquery.transit');
_ = require('lodash');
global.marked = require('marked');

gradientGenerator = require('../libs/gradientGenerator.js');

global.Mobile = require('./Mobile.js');
global.Desktop = require('./Desktop.js');
global.Events = require('./Events.js');
global.Vars = require('./Vars.js');


global.Main = {};

Main.init = function() { 

  Mobile.init();
  Events.init();

  if(Mobile.checkIfMobile() == false) {
    console.log("DESKTOP");
    Desktop.init();
  } else {
    console.log("MOBILE");
    $(body).addClass("mobile");
    Mobile.init();
  }

};

