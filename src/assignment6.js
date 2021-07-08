function reqListener() {
    if(this.status !== 200 || !this.responseText) {
        alert("Error");
        return;
    }
    console.log("Unparsed: " + this.responseText);

    // Parse and log response body
    const jsonbody = JSON.parse(this.responseText);
    console.log(jsonbody);
    const link = jsonbody.file;

    // Create and put image on page
    const image = document.createElement("img");
    image.src = link;
    image.className = "cat";
    const container = document.getElementById("container");
    container.appendChild(image);
}

// Trigger GET request
for(let i = 0; i < 3; i++) {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://aws.random.cat/meow");
    oReq.send();
}