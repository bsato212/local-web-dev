function reqListener() {
    console.log("Unparsed: " + this.responseText);
}

// Trigger GET request
const oReq = new XMLHttpRequest();
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
    for(let i = 0; i < jsonbody.length; i++) {
        const link = jsonbody[i].download_url;

        // Create and put image on page
        const image = document.createElement("img");
        image.src = link;
        image.className = "picsum";
        const container = document.getElementById("container");
        container.appendChild(image);
    }
}