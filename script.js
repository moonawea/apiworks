const button = document.querySelector("#btn");
const image = document.querySelector("#image");


button.addEventListener("click", () => {
    console.log(123)
fetch(`https://api.thecatapi.com/v1/images/search`)
    .then(result => result.json())
    .then(json => {
        console.log(json)
       image.src = json[0].url
        console.log(image.src = json[0].url)
    })
});
