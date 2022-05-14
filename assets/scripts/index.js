document.addEventListener("DOMContentLoaded", function (event) {
    getSuperheroes();
});

function getSuperheroes() {
    fetch('./assets/scripts/superheroes.json')
        .then(response => response.json())
        .then(superheroes => {
            console.log(superheroes);
            let superheroesContent = "";
            for (let superhero of superheroes) {
                superheroesContent +=
                    `<div>
                    <div class = "image__container"><img class="superheroe__image" src = "${superhero.image}"></div>
                    <div class = "superhero__name">${superhero.name}</div> 
                    <div>Вселенная: ${superhero.universe}</div> 
                    <div>Альтер эго: ${superhero.alterego}</div> 
                    <div>Род деятельности: ${superhero.alterego}</div> 
                    <div>Друзья: ${superhero.friends}</div> 
                    <div>Суперсилы: ${superhero.superpower}</div></div>`;
            }
            document.querySelector(".superheroesContent").innerHTML = superheroesContent;
        })
        .catch(error => console.log(error));
}