var element = document.getElementById("button");
element.onclick = function myFunc() {
    //console.log(document.getElementById("one").style);
    //console.log("[" + document.getElementById("one").style.display + "]");
    if(document.getElementById("one").style.display === "none" || document.getElementById("one").style.display === "") {
        document.getElementById("one").style.display = "block";
        element.innerHTML = "Hide";
    } else {
        document.getElementById("one").style.display = "none";
        element.innerHTML = "Show";
    }
}

document.getElementById("promptbutton").onclick = function prompter() {
    var thetext;
    var user = prompt("Enter username: ");
    if(user == null || user == "") {
        thetext = "Cancelled";
    } else {
        thetext = user;
    }
    document.getElementById("clickp").innerHTML = thetext;
}

document.getElementById("backbutton").onclick = function backwards() {
    window.history.back();
}
document.getElementById("forwardbutton").onclick = function forwards() {
    window.history.forward();
}