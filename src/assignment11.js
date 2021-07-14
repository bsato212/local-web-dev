function createImage(data) {
    // Create and put image on page
    const image = document.createElement("img");
    image.src = data.file;
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

const cat1 = promise();
const cat2 = promise();
const cat3 = promise();

Promise
    .all([cat1, cat2, cat3])
    .then(data => {
        return Promise.all(data.map(data => JSON.parse(data)));
    })
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            createImage(data[i]);
        }
    })
    .catch(error => console.error(error));