function reqListener() {
    console.log("Unparsed: " + this.responseText);
}

// Trigger GET request
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://shibe.online/api/shibes?count=3&urls=true&httpsUrls=false");
oReq.send();

// Parse and log response body
oReq.onload = function() {
    const jsonbody = JSON.parse(oReq.responseText);
    console.log(jsonbody);
    for(var i = 0; i < jsonbody.length; i++) {
        var link = jsonbody[i].url;

        // Create and put image on page
        var image = document.createElement("img");
        image.src = link;
        var p = document.getElementById("line");
        p.parentNode.insertBefore(image, p.nextSibling);
    }
}