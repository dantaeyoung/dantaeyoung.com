Site = {};


$(document).ready(function() {
    var thisHour = new Date().getHours();
    if ( thisHour > 21 || thisHour < 6) {
        // in the wee hours of the night, the website turns dark.
        window.darkmode = true;
    }
    Events.init();

    $("#logo").click(function() {
        window.darkmode = !window.darkmode;
        Events.init();
    });
});

