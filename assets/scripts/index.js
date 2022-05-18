document.addEventListener("DOMContentLoaded", function (event) {
    getSuperheroes();
});

function getSuperheroes() {
    fetch('./assets/scripts/superheroes.json')
        .then(response => response.json())
        .then(superheroes => {
            let superheroesContent = "";
            for (let superhero of superheroes) {
                superheroesContent +=
                    `<div>
                    <div class = "image__container"><img class="superheroe__image" src = "${superhero.image}"></div>
                    <div class = "superhero__name">${superhero.name}</div> 
            
                    <div class="rating-area">
                        <input type="radio" id="star-1" name=${superhero.title} checked value="1">
                        <input type="radio" id="star-2" name=${superhero.title} value="2">
                        <input type="radio" id="star-3" name=${superhero.title} value="3">
                        <input type="radio" id="star-4" name=${superhero.title} value="4">
                        <input type="radio" id="star-5" name=${superhero.title} value="5">
                    </div>
            
                    <div>Вселенная: ${superhero.universe}</div> 
                    <div>Альтер эго: ${superhero.alterego}</div> 
                    <div>Род деятельности: ${superhero.alterego}</div> 
                    <div>Друзья: ${superhero.friends}</div> 
                    <div>Суперсилы: ${superhero.superpower}</div></div>`;
            };

            document.querySelector(".superheroesContent").innerHTML = superheroesContent;

            let superheroRatings = document.querySelectorAll('.rating-area');
            for (let i = 0; i < superheroRatings.length; i++) {
                superheroRatings[i].onclick = function () {
                    localStorage.setItem('batman', document.querySelector('input[name="batman"]:checked').value);
                }
            }

            if (localStorage.getItem('batman')) {
                let batman = localStorage.getItem('batman');
                document.querySelector('input[name="batman"][value="' + batman + '"]').setAttribute('checked', 'checked');
            }

        })
        .catch(error => console.log(error));
}