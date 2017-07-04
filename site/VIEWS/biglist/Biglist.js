Biglist = {};


Biglist.init = function() {


  Biglist.projectList = new Vue({
    el: '#biglist',
    data: {
      projects: Vars.allProjects
    },
    computed: {
      randomizedProjects: function () {
        var assignOrdinal = function(x) { return  _.assign(x, { "ordinal": _.random(1, 1000) }); };
        console.log(_.map(this.projects, assignOrdinal));
        return _.map(this.projects, assignOrdinal);
      }
    },
    methods: {
      loading: function(item) {
        console.log(item);
        return false;
      },
      folderName: function(item) {
        return item.split("/")[0];
      },
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
  });


  Biglist.menuList = new Vue({
    el: '#menulist',
    data: {
      picked: null 
    },
    watch: {
      picked: function(val, oldval) {
        if(oldval) { $("body").removeClass(oldval + "View"); }
        $("body").addClass(val + "View");
         console.log(val);
      }
    },
    methods: {
      casualView: function() {
      }
    }
  });


}

