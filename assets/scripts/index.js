document.addEventListener("DOMContentLoaded", function (event) {
    getSuperheroes();
});

function getSuperheroes() {
    fetch('./assets/scripts/superheroes.json')
        .then(response => response.json())
        .then(superhero => {
            console.log(superhero);
        })
        .catch(error => console.log(error));
}