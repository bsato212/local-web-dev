for(let i = 0; i < 3; i++) {
    fetch("https://aws.random.cat/meow")
        .then(response => response.json())
        .then(data => {
            console.log(data.file);
            var image = document.createElement("img");
            image.src = data.file;
            image.className = "cat";
            var container = document.getElementById("container");
            container.appendChild(image);
        })
        .catch(error => {
            if(response.ok == false) {
                console.log(error);
            }
        });
}