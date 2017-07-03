Flavor = {};

Flavor.init = function() {

  console.log(Vars);

  Flavor.projectList = new Vue({
    el: '#projectlist',
    data: {
      projects: Vars.projects_to_show
    },
    methods: {
      shade: function(item) {
        console.log(item.seriousness);
        return item.seriousness;
      }
    }
  })
}

