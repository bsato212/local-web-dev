function reqListener() {
    console.log("Unparsed: " + this.responseText);
}

// Trigger GET request
const oReq = new XMLHttpRequest();
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
    const link = jsonbody.file;

    // Create and put image on page
    const image = document.createElement("img");
    image.className = "cat";
    image.src = link;
    const p = document.getElementById("line");
    p.parentNode.insertBefore(image, p.nextSibling);
}