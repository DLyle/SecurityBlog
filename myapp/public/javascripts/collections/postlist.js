define([
  'underscore',
  'backbone',
  'models/posts'
  ],function(_,Backbone,PostModel){
    var PostList = Backbone.Collection.extend({
      url: "http://localhost:5000/posts",
      model: PostModel,
      parse: function(response){
        console.log(response); 
        return response;
      }
    });
    return PostList;
  });

