$ = global.jQuery = require('jquery');
_ = require('lodash');
global.Vue = require('../../node_modules/vue/dist/vue.min.js');

gradientGenerator = require('../libs/gradientGenerator.js');

global.Mobile = require('./Mobile.js');
global.Desktop = require('./Desktop.js');
global.Events = require('./Events.js');
global.Vars = require('./Vars.js');
//global.Flavor = require('./Flavor_shadeProjects.js');


global.Main = {};

Main.init = function() { 

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

};

