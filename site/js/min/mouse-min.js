desktop={},desktop.makeVelocityCalculator=function(t){var o,e,n=Date.now();return function(c){var a=c.clientX,i=c.clientY,u=Date.now(),r=a-o,s=i-e,l=u-n;o=a,e=i,n=u;var d=Math.sqrt(r*r+s*s)/l;t(d)}},desktop.distanceListener=function(t,o){var e=0,n=function(n){n>.1&&(e+=n),e>t&&(e%=t,o())};$(document).on("mousemove",desktop.makeVelocityCalculator(n))},desktop.velocityListener=function(t,o){var e=function(e){e>t&&o(e)};$(document).on("mousemove",desktop.makeVelocityCalculator(e))},desktop.init=function(){};