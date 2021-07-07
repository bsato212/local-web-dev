function reqListener() {
    console.log("Unparsed: " + this.responseText);

    // Parse and log response body
    const jsonbody = JSON.parse(this.responseText);
    console.log(jsonbody);
    var link = jsonbody.file;

    // Create and put image on page
    var image = document.createElement("img");
    image.src = link;
    image.className = "cat";
    var container = document.getElementById("container");
    container.appendChild(image);
}

// Trigger GET request
for(let i = 0; i < 3; i++) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://aws.random.cat/meow");
    oReq.send();
}