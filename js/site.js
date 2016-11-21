site = {};


$(document).ready(function() {

    mobile.init();
    desktop.init();
    events.init();

    if(mobile.checkIfMobile() == false) {

        site.dl1 = new desktop.distanceListener(30, events.incrementInterested);
        site.dl2 = new desktop.distanceListener(50, events.transitionGradients);
        site.dl3 = new desktop.velocityListener(0.5, events.fadeTextIn);

        window.fadeOutInterval = setInterval(function() { events.fadeTextOut(); }, 1000);


    } else {
        $(body).addClass("mobile");

        var m = new mobile.startGyro();
        m.addEvent(2, events.incrementInterested);
        m.addEvent(4, events.transitionGradients);

    }
});

