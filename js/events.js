events = {};

events.interestedN = 0;

events.transitionGradients = function() {
    var thisgradient = _.sample(vars.gradients);
    $("#background-under").attr("style", $("#background-over").attr("style")).fadeTo(1000, 1.0);
    $("#background-over").gradientGenerator({
        direction: thisgradient[0],
        colors: [{color: thisgradient[1], percent: 0}, {color: thisgradient[2], percent: 100}]
    }).fadeTo(0, 0, function() { $(this).fadeTo(1000,1); })
}

events.fadeTextIn = function() {
    if(!$(".text").hasClass("fadingIn")) {
        $(".text").removeClass("fadingOut").stop(true, false).addClass("fadingIn").fadeIn(500, function() { $(this).removeClass("fadingIn"); });
    }
} 

events.fadeTextOut = function() {
    if(!$(".text").hasClass("fadingIn")) {
        if(!$(".text").hasClass("fadingOut")) {
            $(".text").stop(true, false).addClass("fadingOut").fadeOut(500, function() { $(this).removeClass("fadingOut"); });
        }
    }
}


events.termFade = function(selector, term) {
    $(".term").fadeIn();
    $(".term").fadeOut(200, function() { $(this).remove(); });
    var thisTerm = $("<div class='term'>" + term + "</div>").hide().appendTo(selector).fadeIn(100);//.fadeOut(3000, function() { $(this).remove(); });
}


events.incrementInterested = function() {
    events.interestedN = (events.interestedN || 0) + 1;
    events.interestedN %= (vars.interested_in.length - 1);
    events.termFade("#interested_in", vars.interested_in[events.interestedN]);
}


