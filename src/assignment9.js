const button = document.getElementById("button");
const container = document.getElementById("container");
const unorderedlist = document.createElement("ul");
container.appendChild(unorderedlist);

button.addEventListener('click', () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random().toFixed(4));
            reject("Not random number :(");
        }, 2000)
    });
    promise
        .then(data => {
            console.log(data)
            const listitem = document.createElement("li");
            listitem.innerText = data;
            unorderedlist.appendChild(listitem);
        })
        .catch(err => console.error(err));
});