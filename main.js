

//Constants for the status
const hungerStat = document.querySelector('#hunger-stat')
const sleepinessStat = document.querySelector('#sleepiness-stat')
const boredomeStat = document.querySelector('#boredome-stat')
const ageStat = document.querySelector('#age-stat')


//Constants for buttons
const feedBtn = document.querySelector('.feed')
const lightBtn = document.querySelector('.light')
const playBtn = document.querySelector('.play')


//Tamagotchi's name
const nameBtn = document.querySelector('#name-btn');
console.log(nameBtn);

nameBtn.addEventListener('click', () => {
    let nameInput = document.querySelector('#input');
    let message = document.querySelector('#message');
    message.innerText = "Hi my name is " + nameInput.value + "!";
});


//Start game
const hungerStart = 10;
const sleepinessStart = 10;
const boredomeStart = 10;
const ageStart = 1





//TamaGucci function
function tamagucci(){
    this.hunger = hungerStart;
    this.sleepiness = sleepinessStart;
    this.boredome = boredomeStart;
    this.age = ageStart;
}