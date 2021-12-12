let days = document.getElementById('jours');
let hours = document.getElementById('heures');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('secondes');

let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');

let compteARebours = document.getElementById('compteARebours');

function start() {

    time = setInterval(() => {
        if (compteurSeconds >= -1 && compteurMinutes >= -1 && compteurHours >= -1 && compteurDays >= 0){
            compteARebours.innerHTML = compteurDays +' jours 0' + compteurHours + ' heures 0' + compteurMinutes + ' minutes 0' + compteurSeconds;
        }
       if (compteurSeconds >= 61) {
           compteurSeconds -=61;
            compteurMinutes+=1
        }
        if (compteurMinutes >= 61) {
            compteurMinutes -=61;
            compteurHours+=1
        }
        if (compteurHours >= 25) {
            compteurHours -=25;
            compteurDays+=1
        }
        compteurSeconds--;

        if (compteurSeconds === -1) {
            compteurMinutes--
            compteurSeconds = 60;
        }
        if (compteurMinutes === -1) {
            compteurHours--
            compteurMinutes = 60;
        }
        if (compteurHours === -1) {
            compteurDays--
            compteurHours = 60;
        }

        }, 1000)
    days.value = "";
    hours.value = "";
    minutes.value = "";
    seconds.value = "";

}

function pause() {
    clearInterval(time);
}

let compteurHours;
let compteurMinutes;
let compteurSeconds;

startButton.addEventListener("click", () => {
    compteurDays = parseInt(document.getElementById('jours').value);
    compteurHours = parseInt(document.getElementById('heures').value);
    compteurMinutes = parseInt(document.getElementById('minutes').value);
    compteurSeconds = parseInt(document.getElementById('secondes').value);
})


startButton.addEventListener("click", () => {
            start();





})

pauseButton.addEventListener("click", () => {
    pause()
})

resetButton.addEventListener("click", () => {
 compteurHours = 0;
 compteurMinutes = 0;
 compteurSeconds = 0;
})



