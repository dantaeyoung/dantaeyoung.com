site={},$(document).ready(function(){if(0==mobile.checkIfMobile()){var e=new mouse.distanceListener(15,events.incrementInterested),t=new mouse.distanceListener(50,events.transitionGradients),t=new mouse.velocityListener(.5,events.fadeTextIn);setInterval(function(){events.fadeTextOut()},500)}else $(body).addClass("mobile"),mobile.startGyro()});