function reqListener() {
    console.log("Unparsed: " + this.responseText);
}

// Trigger GET request
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://aws.random.cat/meow");
oReq.send();

// Parse and log response body
oReq.onload = function() {
    if(oReq.status !== 200 || !oReq.responseText) {
        alert("Error");
        return;
    }
    const jsonbody = JSON.parse(oReq.responseText);
    console.log(jsonbody);
    var link = jsonbody.file;

    // Create and put image on page
    var image = document.createElement("img");
    image.id = "image";
    image.src = link;
    var p = document.getElementById("line");
    p.parentNode.insertBefore(image, p.nextSibling);
}