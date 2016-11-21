desktop = {};

desktop.makeVelocityCalculator = function(callback) {
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


desktop.distanceListener = function(distance, callback) {
    var mouseTravel = 0;

    var fadeFunction = function(vel) {
        if(vel > 0.1) {
            mouseTravel += vel;
        }
        if(mouseTravel > distance) {
            mouseTravel %= distance;
            callback();
        }
    }

    $(document).on("mousemove", desktop.makeVelocityCalculator(fadeFunction));
}

desktop.velocityListener = function(velocity, callback) {
    var fadeFunction = function(vel) {
        if(vel > velocity) {
            callback(vel);
        }
    }
    $(document).on("mousemove", desktop.makeVelocityCalculator(fadeFunction));
}

desktop.init = function() {
}
