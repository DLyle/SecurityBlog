require.config({
    paths: { 
      'jquery':'libs/jquery-1.9.1.min',
      'underscore':'libs/underscore-min',
      'backbone':'libs/backbone'
    },
    shim: {
      'backbone':{
        deps:['underscore','jquery'],
        exports:'Backbone'
      },
      'underscore':{
        exports:'_'
      }
    }
});
require(['app'],function(App){
  App.initialize();
});
