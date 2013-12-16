function newPost(){
  postList = document.getElementById("postList");
  console.log($("#thepost"));
  escapedPost = _.escape($("#thepost").val());
  origPost = $("#thepost").val();
  XSS = "";
  console.log(escapedPost.match(/&\w+;/g));
  if(escapedPost.match(/&\w+;/g)){
    XSS = "XSS Detected in this Post: ";
  }
  post = origPost;
  console.log($("#escape").prop("checked"));
  if($("#escape").prop("checked")){
    console.log("escaping");
    post = escapedPost;
  }
  $("#postList").prepend("<p>"+XSS+post+"</p>");
}
