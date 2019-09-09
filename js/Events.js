var Events = {};

Events.interestedN = 0;

Events.randPastelVars = function() {

    var difference = 0.6;  // 0 ~ 1; 0 = same, 1 = different colors
    var spread = 0.4; // 0 ~ 1: 0 = always same/different, 1 = total randomness

    var hue1 = _.random(0, 360);
    var hue2 = (hue1 + _.random((180 * difference) - (180 * spread), (180 * difference) + (180 * spread))) % 360;

    if(window.darkmode == true) {
        var lightness = _.random(10, 30);
    } else {
        var lightness = _.random(60, 90);
    }

    return [hue1, hue2, lightness]
}


Events.pastelPairFromVars = function(vars) {
    var hue1 = vars[0];
    var hue2 = vars[1];
    var lightness = vars[2];

    var pastel1 = 'hsl(' + hue1 + ', 100%, ' + lightness + '%)';
    var pastel2 = 'hsl(' + hue2 + ', 100%, ' + lightness + '%)';
    return [pastel1, pastel2];
}

Events.randPastelPair = function() {
    var vars = Events.randPastelVars();
    return Events.pastelPairFromVars(vars);
}

Events.transitionGradients = function() {
    var thisgradient = Events.randPastelPair();

    // make Under the same as Over, make Under opacity 1, OVer opacity 0
    // set Over as new gradient
    // transition over to op 1

    if($(".backgrounds").hasClass("transitioning") == false) {
        $(".backgrounds").addClass("transitioning");
        $("#background-under").attr("style", $("#background-over").attr("style")).fadeTo(0, 1.0);
        $("#background-over").fadeTo(0, 0.0).gradientGenerator({
            direction: _.random(0, 360, false) + "deg",
            colors: [{color: thisgradient[0], percent: 0}, {color: thisgradient[1], percent: 100}]
        }).fadeTo(1000, 1.0, function() {
            $(".backgrounds").removeClass("transitioning");
        });
    }
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - (h.clientHeight||b.clientHeight)) * 100;
}

function scrollPoints(n) {
	return _.map(_.range(n), function(x) { return x * (100 / (n - 1)); })
}

function initInterpolation () {

    // we make four sets of lists -- for color 1 hue, color 2 hue, color 1 & 2 lightness, direction 
    var sampleN = 3;  

    var interparray = []
    for(let i = 0; i < sampleN; i++) {
        var pastelvars = Events.randPastelVars()
        pastelvars[pastelvars.length] = _.random(0, 360, false)
        interparray.push(pastelvars)
    }
    interparray = _.zip.apply(_, interparray) //transpose the array

    // we now have x values and y values
    var xValues = scrollPoints(sampleN);
    var hue1Values = interparray[0]
    var hue2Values = interparray[1]
    var lightnessValues = interparray[2]
    var directionValues = interparray[3]

    Events.generateInterpolatedBackground = function(x) {
        var vars = 
           [everpolate.polynomial(x, xValues, hue1Values),
            everpolate.polynomial(x, xValues, hue2Values),
            everpolate.polynomial(x, xValues, lightnessValues)]
        var pastelPair = Events.pastelPairFromVars(vars);
        var dir = everpolate.polynomial(x, xValues, directionValues);

        var backgroundString = "linear-gradient(" + dir + "deg, " + pastelPair[0] + ", " + pastelPair[1] + ")";

        console.log(backgroundString);

        $("#background-over").css({ background: backgroundString});
    }


    console.log(interparray)
    return interparray
}


Events.init = function() {

    if(typeof(window.darkmode) == "undefined") {
        window.darkmode = false;
    }

    if(window.darkmode == true) {
        $("body").addClass("darkmode");
    } else {
        $("body").removeClass("darkmode");
    }


    initInterpolation()
        /*    window.gradient = setInterval(function() {
        Events.transitionGradients();
    }, 100000); */
    var sp = getScrollPercent();
    console.log( Events.generateInterpolatedBackground(sp));

    $(window).scroll(function (event) {
        var sp = getScrollPercent();
        console.log( Events.generateInterpolatedBackground(sp));
    });
}
