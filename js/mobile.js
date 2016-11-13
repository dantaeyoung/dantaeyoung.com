mobile = {};

mobile.gyroCount = 0;
window.wasFlat = true;
mobile.frequency = 200;

mobile.checkIfMobile = function() {
    var o = gyro.getOrientation();
    if(o.beta == null) {
        if(typeof(mobile.isMobile) === 'undefined') {
            mobile.isMobile = false;
        } 
    } else { 
        mobile.isMobile = true;
    }

    return mobile.isMobile;
}

mobile.angleDiff = function(sourceA, targetA) {
    a = targetA - sourceA;
    a += (a>180) ? -360 : (a<-180) ? 360 : 0;
    a = Math.abs(a);
    return a;
}

mobile.map_range = function(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

mobile.angleToOpacity = function(ang1, ang2, range) {
    var ad = mobile.angleDiff(ang1, ang2)
    return mobile.map_range(ad, 0, range, 1.0, 0.0)
}

mobile.startGyro = function() {

    this.events = [];

    gyro.startTracking(function(o) { 
        if(mobile.checkIfMobile() == false) { return; }



        var op = mobile.angleToOpacity(90, o.beta, 90);

        $(".text").css({'opacity': op});


        if(op > 0.5) {
            mobile.gyroCount += 1;
            $.each(this.events, function(inc, e) {
                if(mobile.gyroCount % inc == 0) {  e(); }
            });
        }

    });

}

mobile.startGyro.prototype.addEvent = function(inc, func) {
    this.events.push([inc, func])
    console.log("Adding event to fire every " + inc);
}
