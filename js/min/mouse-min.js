mouse={},mouse.makeVelocityCalculator=function(e){var o,t,n=Date.now();return function(u){var a=u.clientX,c=u.clientY,i=Date.now(),m=a-o,r=c-t,l=i-n;o=a,t=c,n=i;var s=Math.sqrt(m*m+r*r)/l;e(s)}},mouse.distanceListener=function(e,o){var t=0,n=function(n){n>.1&&(t+=n),t>e&&(t%=e,o())};$(document).on("mousemove",mouse.makeVelocityCalculator(n))},mouse.velocityListener=function(e,o){var t=function(t){t>e&&o(t)};$(document).on("mousemove",mouse.makeVelocityCalculator(t))};