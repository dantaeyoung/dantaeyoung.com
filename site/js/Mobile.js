gyro = require('../libs/gyro.js');

Mobile = {};

Mobile.gyroCount = 0;
window.wasFlat = true;
Mobile.frequency = 200;

Mobile.checkIfMobile = function() {
    var o = gyro.getOrientation();
    if(o.beta == null) {
        if(typeof(Mobile.isMobile) === 'undefined') {
            Mobile.isMobile = false;
        } 
    } else { 
        Mobile.isMobile = true;
        $("body").addClass("Mobile");
    }

    return Mobile.isMobile;
}

Mobile.angleDiff = function(sourceA, targetA) {
    a = targetA - sourceA;
    a += (a>180) ? -360 : (a<-180) ? 360 : 0;
    a = Math.abs(a);
    return a;
}

Mobile.map_range = function(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

Mobile.angleToOpacity = function(ang1, ang2, range) {
    var ad = Mobile.angleDiff(ang1, ang2)
    return Mobile.map_range(ad, 0, range, 1.0, 0.0)
}

Mobile.startGyro = function() {

    var instance = this;
    this.Events = [];

    if(Mobile.checkIfMobile() == false) { return; }
    gyro.startTracking(function(o) { 

        var op = Mobile.angleToOpacity(90, o.beta, 90);

        $(".text").css({'opacity': op});
        $(".backgrounds").css({'opacity': op});

        if(op > 0.5) {
            Mobile.gyroCount += 1;
            instance.checkAndRunEvents(Mobile.gyroCount);
        }

    });
}

Mobile.startGyro.prototype.enableDebug = function() {
    var instance = this;
    window.clearInterval(window.fadeOutInterval);
    $(".text").show(); //css({'opacity': Mobile.gyroCount % 3 / 3});
    setInterval(function(){ 
        Mobile.gyroCount += 1; 
        instance.checkAndRunEvents(Mobile.gyroCount);
    }, 1000);
}

Mobile.startGyro.prototype.addEvent = function(inc, func) {

    func();

    this.Events.push({'interval': inc, 'function': func, 'lastfire': Date.now()})
    console.log("Adding event to fire every " + inc);
}

Mobile.startGyro.prototype.getEvents = function() {
    console.log(this.Events);
}

Mobile.startGyro.prototype.checkAndRunEvents = function(gc) {
    _.forEach(this.Events, function(e) {
        if(gc % e['interval'] == 0) {  
            console.log("running event!");
            e['function']();
        }
    });
}

Mobile.init = function() {
  window.m = new Mobile.startGyro();
  m.addEvent(2, Events.incrementInterested);
  m.addEvent(4, Events.transitionGradients);
}

module.exports = Mobile;
