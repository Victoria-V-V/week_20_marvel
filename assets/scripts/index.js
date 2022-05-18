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
                    <div class = "image__container"><img class="superhero__image" src = "${superhero.image}"></div>
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
                    localStorage.setItem('superman', document.querySelector('input[name="superman"]:checked').value);
                    localStorage.setItem('ironman', document.querySelector('input[name="ironman"]:checked').value);
                    localStorage.setItem('spiderman', document.querySelector('input[name="spiderman"]:checked').value);
                    localStorage.setItem('captain', document.querySelector('input[name="captain"]:checked').value);
                    localStorage.setItem('thor', document.querySelector('input[name="thor"]:checked').value);
                    localStorage.setItem('halk', document.querySelector('input[name="halk"]:checked').value);
                    localStorage.setItem('wonderwoman', document.querySelector('input[name="wonderwoman"]:checked').value);
                    localStorage.setItem('blackwidow', document.querySelector('input[name="blackwidow"]:checked').value);
                    localStorage.setItem('deadpool', document.querySelector('input[name="deadpool"]:checked').value);
                }
            }

            if (localStorage.getItem('batman')) {
                let batman = localStorage.getItem('batman');
                document.querySelector('input[name="batman"][value="' + batman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('superman')) {
                let superman = localStorage.getItem('superman');
                document.querySelector('input[name="superman"][value="' + superman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('ironman')) {
                let ironman = localStorage.getItem('ironman');
                document.querySelector('input[name="ironman"][value="' + ironman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('spiderman')) {
                let spiderman = localStorage.getItem('spiderman');
                document.querySelector('input[name="spiderman"][value="' + spiderman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('captain')) {
                let captain = localStorage.getItem('captain');
                document.querySelector('input[name="captain"][value="' + captain + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('thor')) {
                let thor = localStorage.getItem('thor');
                document.querySelector('input[name="thor"][value="' + thor + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('halk')) {
                let halk = localStorage.getItem('halk');
                document.querySelector('input[name="halk"][value="' + halk + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('wonderwoman')) {
                let wonderwoman = localStorage.getItem('wonderwoman');
                document.querySelector('input[name="wonderwoman"][value="' + wonderwoman + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('blackwidow')) {
                let blackwidow = localStorage.getItem('blackwidow');
                document.querySelector('input[name="blackwidow"][value="' + blackwidow + '"]').setAttribute('checked', 'checked');
            }

            if (localStorage.getItem('deadpool')) {
                let deadpool = localStorage.getItem('deadpool');
                document.querySelector('input[name="deadpool"][value="' + deadpool + '"]').setAttribute('checked', 'checked');
            }

        })
        .catch(error => console.log(error));
}