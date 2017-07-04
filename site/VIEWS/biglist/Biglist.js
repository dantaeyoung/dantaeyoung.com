Biglist = {};


Biglist.init = function() {

  console.log(Vars);

  Biglist.projectList = new Vue({
    el: '#biglist',
    data: {
      projects: Vars.allProjects
    },
    methods: {
      shade: function(item) {
        console.log(item.seriousness);
        return item.seriousness;
      },
      positionStyle: function(item) {
        var s = "";
        if(item.twobytwo.scores.playfulness < 0.5) { 
          s += "left: " + (item.twobytwo.scores.playfulness * 100) + "%;";
        } else {
          s += "right: " + ((1 - item.twobytwo.scores.playfulness) * 100) + "%;";
        }
        if(item.twobytwo.scores.infrastructureness < 0.5) { 
          s += "top: " + (item.twobytwo.scores.infrastructureness * 100) + "%;";
        } else {
          s += "bottom: " + ((1 - item.twobytwo.scores.infrastructureness) * 100) + "%;";
        }
        console.log(s);
        return s;
      },
      itemStyle: function(item) {
        var s = "";
        return s;
      }
    }
  })
}

