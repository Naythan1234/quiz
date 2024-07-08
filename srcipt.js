let ans;
ans = prompt("Register your name for the quiz");
if(ans == null || ans ==""){
    document.getElementById("nav1").style="display:none;";
}
else{ 
    document.getElementById("p1").innerHTML="Hello," +ans+ " Welcome to Tech Learner. Your name is now registered.";
    document.getElementById("p1").style="text-align:center;";
      document.getElementById("nav1").style="display:block;background-image:url(https://th.bing.com/th/id/R.2ae6ba37a6f4ebbc83d4d4f6be997f41?rik=2QGiZa7YHI2Mxg&pid=ImgRaw&r=0);background-size:cover;background-repeat:no-repeat;height:450px;";
}
