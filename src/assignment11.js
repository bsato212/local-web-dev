function createImage(data) {
    const jsondata = JSON.parse(data);
    const link = jsondata.file;

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
                }, 2000)
            }
        }
        oReq.send();
    });
}

const cat1 = makePromise();
const cat2 = makePromise();
const cat3 = makePromise();

Promise
    .all([cat1, cat2, cat3])
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            createImage(data[i]);
        }
    })
    .catch(error => console.error(error));

/*
for(let i = 0; i < 3; i++) {
    makePromise()
        .then(data => createImage(data))
        .catch(error => console.log(error));
}
*/