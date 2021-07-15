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

function makePromise() {
    return new Promise((resolve, reject) => {
        const oReq = new XMLHttpRequest();
        oReq.open("GET", "https://aws.random.cat/meow");
        oReq.onload = function() {
            if(this.status !== 200) {
                reject("Error");
            } else {
                setTimeout(() => {
                    resolve(oReq.responseText);
                }, 1000)
            }
        }
        oReq.send();
    });
}

console.log(`${Date.now()} First promise`);
makePromise()
    .then(data => {
        createImage(data);
        console.log(`${Date.now()} Second promise`)
        return makePromise();
    })
    .then(data => {
        createImage(data);
        console.log(`${Date.now()} Third promise`)
        return makePromise();
    })
    .then(data => {
        createImage(data);
        console.log(`${Date.now()} Done`);
    })
    .catch(error => console.log(error));