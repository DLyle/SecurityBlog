define([
  'jquery',
  'underscore',
  'backbone',
  'models/posts',
  'collections/postlist',
  'text!templates/posts/list.html'
  ],function($,_,Backbone,Post,PostList,ListTemplate){
      var ListView = Backbone.View.extend({
          el: "#postList",
          initialize: function(){
            this.collection = new PostList();
            this.render(); 
          },
          events: {
            "click [id=newpost]":"newPost"
          },
          render: function(){
          this.collection.fetch({
            reset:true,
            success:function(response){
            console.log(JSON.stringify(response));
          var models = listView.collection.models;
          var variables = {models:listView.collection.models};
          var template = _.template(ListTemplate,variables);
          $(listView.el).html(template);
          $(listView.el).append("<ul>");
      for(var i=models.length-1; i>=0; i--){
        console.log(models[i]);
        var content = models[i].get("content");

        $(listView.el).append("<li>"+content+"</li>"); 
      }
      $(listView.el).append("</ul>");
          }
          });
      },
newPost: function(){
           var content = $("#thepost").val();
           escapedContent = _.escape(content);
           var XSS = "";
           if(escapedContent.match(/&\w+;/g)){
             XSS = "XSS Detected in this Post: ";
           }
           if($("#escape").prop("checked")){
             content = escapedContent;
           }
           content = XSS + content;
           console.log("new post");
           var newPost = new Post();
           newPost.set({content: content});
           this.render();
           console.log(newPost);
         }
});
return ListView;
});

