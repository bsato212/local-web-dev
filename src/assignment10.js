function createImage(data) {
    console.log("Unparsed: " + data);

    // Parse and log response body
    const jsonbody = JSON.parse(data);
    console.log(jsonbody);
    const link = jsonbody.file;

    // Create and put image on page
    const image = document.createElement("img");
    image.src = link;
    image.className = "cat";
    const container = document.getElementById("container");
    container.appendChild(image);
}

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const oReq = new XMLHttpRequest();
            oReq.open("GET", "https://aws.random.cat/meow");
            oReq.onload = function() {
                if(this.status !== 200) {
                    reject("Error");
                } else {
                    resolve(oReq.responseText);
                }
            }
            oReq.send();
        }, 2000)
    });
}

for(let i = 0; i < 3; i++) {
    promise()
        .then(data => createImage(data))
        .catch(error => console.log(error));
}