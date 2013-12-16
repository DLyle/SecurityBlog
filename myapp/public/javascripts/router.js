define([
  "jquery",
  "underscore",
  "backbone",
  "views/posts/list"
  ],function($,_,Backbone,ListView){
    var AppRouter = Backbone.Router.extend({
      routes:{
        "*actions":"showPosts"
      },
      showPosts : function(){
        if(typeof listView == 'undefined') listView = new ListView(); 
        else{
          listView.collection.fetch({reset:true});
          listView.render();
        }
      }
    });
    var initialize = function(){
      var app_router = new AppRouter;
      Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });

