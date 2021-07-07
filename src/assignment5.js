function reqListener() {
    console.log("Unparsed: " + this.responseText);
}

// Trigger GET request
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://picsum.photos/v2/list?limit=3");
oReq.send();

// Parse and log response body
oReq.onload = function() {
    if(oReq.status !== 200 || !oReq.responseText) {
        alert("Error");
        return;
    }
    const jsonbody = JSON.parse(oReq.responseText);
    console.log(jsonbody);
    for(var i = 0; i < jsonbody.length; i++) {
        var link = jsonbody[i].download_url;

        // Create and put image on page
        var image = document.createElement("img");
        image.src = link;
        var container = document.getElementById("container");
        container.appendChild(image);
    }
}