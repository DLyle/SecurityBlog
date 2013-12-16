define([
  'underscore',
  'backbone'
  ],function(_,Backbone){
    var PostModel = Backbone.Model.extend({
      url: "http://localhost:5000/posts",
      defaults: {
        "content" : "",
      },
      initialize: function(){
        this.on("change",function(model,options){
          model.save();
        });
      }
    });
    return PostModel;
  });
