Flavor={},Flavor.init=function(){console.log(Vars),Flavor.projectList=new Vue({el:"#projectlist",data:{projects:Vars.projects_to_show},methods:{shade:function(o){return console.log(o.seriousness),o.seriousness}}})};