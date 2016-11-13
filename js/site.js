site = {};


$(document).ready(function() {

    mobile.init();
    mouse.init();
    events.init();

    if(mobile.checkIfMobile() == false) {

        var mdl1 = new mouse.distanceListener(15, events.incrementInterested);
        var mdl2 = new mouse.distanceListener(50, events.transitionGradients);
        var mdl2 = new mouse.velocityListener(0.5, events.fadeTextIn);

//        window.fadeOutInterval = setInterval(function() { events.fadeTextOut(); }, 500);


    } else {
        $(body).addClass("mobile");

        var m = new mobile.startGyro();
        m.addEvent(2, events.incrementInterested);
        m.addEvent(4, events.transitionGradients);

    }
});

