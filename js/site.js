site = {};


$(document).ready(function() {

    if(mobile.checkIfMobile() == false) {

        var mdl1 = new mouse.distanceListener(15, events.incrementInterested);
        var mdl2 = new mouse.distanceListener(50, events.transitionGradients);
        var mdl2 = new mouse.velocityListener(0.5, events.fadeTextIn);

//        setInterval(function() { events.fadeTextOut(); }, 500);


    } else {
        $(body).addClass("mobile");

        mobile.startGyro();

    }
});

