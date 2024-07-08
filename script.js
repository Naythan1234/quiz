document.addEventListener("DOMContentLoaded", function() {
    let ans = prompt("Register your name for the quiz");
    if (ans == null || ans == "") {
        document.getElementById("nav1").style.display = "none";
    } else {
        document.getElementById("p1").innerHTML = "Hello, " + ans + " Welcome to Tech Learner. Your name is now registered.";
        document.getElementById("p1").style.textAlign = "center";
        document.getElementById("nav1").style.display = "block";
        document.getElementById("nav1").style.backgroundImage = "url(https://th.bing.com/th/id/R.2ae6ba37a6f4ebbc83d4d4f6be997f41?rik=2QGiZa7YHI2Mxg&pid=ImgRaw&r=0)";
        document.getElementById("nav1").style.backgroundSize = "cover";
        document.getElementById("nav1").style.backgroundRepeat = "no-repeat";
        document.getElementById("nav1").style.height = "450px";
    }
