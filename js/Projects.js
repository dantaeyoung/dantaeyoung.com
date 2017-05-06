Projects = {};

Projects.bindNoPage = function(elem) {
  $(elem).click(function(event) {
    event.preventDefault();
    console.log("you clicked this, but no page exists");
  });
}

Projects.bindExistsPage = function(elem) {
}

Projects.bindAnyPage = function(elem) {

  var splashimage = $(elem).data("splashimage");
  $("<div class='splashimage'/>")
    .css("background-image", 'url("' + splashimage + '")')
    .attr("id", elem.id + "-splashimage")
    .appendTo("#splashimages");

  $(elem).hover(function(e) {
    console.log(e.target.id);
    $("#" + e.target.id + "-splashimage").fadeIn(200);
  }, function(e) {
    console.log(e);
    $("#" + e.target.id + "-splashimage").fadeOut(100);
  });
}

Projects.init = function() {

  $(".proj").each(function(i, e) {
    console.log(e.href);
		$.ajax({
      type: 'HEAD',
      url: e.href,
      success: function() {
        console.log("page exists!");
        Projects.bindExistsPage(e);
      },
      error: function() {
        console.log("page nono exists!");
        Projects.bindNoPage(e);
      }
		});
    Projects.bindAnyPage(e);
  });

  $(document).mousemove(function(e) {
    var pos = { 'top': e.offsetY, 'left': e.offsetX };
    $("#splashimages").offset(pos);
  });
   
}
