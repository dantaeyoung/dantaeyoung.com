Desktop = {};

Desktop.makeVelocityCalculator = function(callback) {
    var x, y, t = Date.now();
    return function(e) {
        var new_x = e.clientX,
            new_y = e.clientY,
            new_t = Date.now();
        var x_dist = new_x - x,
            y_dist = new_y - y,
            interval = new_t - t;
        // update values:
        x = new_x;
        y = new_y;
        t = new_t;
        var velocity = Math.sqrt(x_dist*x_dist+y_dist*y_dist)/interval;
        callback(velocity);
    };
}


Desktop.distanceListener = function(distance, callback) {
    var instance = this;
    instance.mouseTravel = 0;

    var fadeFunction = function(vel) {
        if(vel > 0.1) {
            instance.mouseTravel += vel;
        }
        if(instance.mouseTravel > distance) {
            instance.mouseTravel = 0;
            callback();
        }
    }

    $(document).on("mousemove", Desktop.makeVelocityCalculator(fadeFunction));
}

Desktop.velocityListener = function(velocity, callback) {
    var fadeFunction = function(vel) {
        if(vel > velocity) {
            callback(vel);
        }
    }
    $(document).on("mousemove", Desktop.makeVelocityCalculator(fadeFunction));
}

Desktop.init = function() {
  Desktop.dl1 = new Desktop.distanceListener(30, Events.incrementInterested);
  Desktop.dl2 = new Desktop.distanceListener(50, Events.transitionGradients);
//        site.dl3 = new Desktop.velocityListener(0.1, Events.fadeTextIn);
//        window.fadeOutInterval = setInterval(function() { Events.fadeTextOut(); }, 1000);
}

module.exports = Desktop;
