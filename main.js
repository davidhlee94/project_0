



//Constants for the stats
const hungerStat = document.querySelector('#hunger')
const sleepinessStat = document.querySelector('#sleepiness')
const boredomStat = document.querySelector('#boredom')
const ageStat = document.querySelector('#age')


//Constants for buttons
const feedBtn = document.querySelector('.feed')
const lightBtn = document.querySelector('.light')
const playBtn = document.querySelector('.play')


//Constants for function of buttons
const decreaseHunger = () => {
    if(myPetStart.hungerStart > 0 && myPetStart.hungerStart < 10){
    myPetStart.hungerStart -= 1;
    hungerStat.textContent = "Hunger: " + myPetStart.hungerStart;
    }
}

const decreaseSleepy = () => {
    if(myPetStart.sleepinessStart > 0 && myPetStart.sleepinessStart < 10){
    myPetStart.sleepinessStart -= 1;
    sleepinessStat.textContent = "Sleepiness: " + myPetStart.sleepinessStart;
    }
}

const decreaseBoredom = () => {
    if(myPetStart.boredomStart > 0 && myPetStart.boredomStart < 10){
    myPetStart.boredomStart -= 1;
    boredomStat.textContent = "Boredom: " + myPetStart.boredomStart;
    }
}


//Tamagotchi's name
// const nameBtn = document.querySelector('#name-btn');

// nameBtn.addEventListener('click', () => {
//     let nameInput = document.querySelector('#input');
//     let message = document.querySelector('#message');
//     message.innerText = "Hi my name is " + nameInput.value + "!";
// });


//Name prompt
function giveName(){
    let name = prompt("Please name your TamaGucci:", "Enter name here");
    let message = document.querySelector('#message');
    message.innerText = "Hello my name is " + name + "!";
    
}
giveName();

// prompt("Please name your TamaGucci:");
// let message = document.getElementById('message');
// prompt.value = message;
// message.innterText = "Hi my name is " + prmpt.value + "!";




//Start game
const myPetStart = {
    hungerStart: 1,
    sleepinessStart: 1,
    boredomStart: 1,
    ageStart: 1
}

const intervalInscreaseStats = setInterval(increaseStats, 2000)
//Incrementing the stats every second.
function increaseStats() {
    if (myPetStart.hungerStart < 10 || myPetStart.sleepinessStart < 10 || myPetStart.boredomStart < 10){
    myPetStart.hungerStart += 1;
    myPetStart.sleepinessStart += 1;
    myPetStart.boredomStart += 1;
    myPetStart.ageStart += 2;
    hungerStat.textContent = "Hunger: " + myPetStart.hungerStart;
    sleepinessStat.textContent = "Sleepiness: " + myPetStart.sleepinessStart;
    boredomStat.textContent = "Boredom: " + myPetStart.boredomStart;
    ageStat.textContent = "Age: " + myPetStart.ageStart;
        if (myPetStart.hungerStart === 10 || myPetStart.sleepinessStart === 10 || myPetStart.boredomStart === 10
        ){
            alert("You killed your TamaGucci. RIP.");
            clearInterval(intervalInscreaseStats);
}
}
};




//Runnning event listener for buttons
feedBtn.addEventListener('click', decreaseHunger);
lightBtn.addEventListener('click', decreaseSleepy);
playBtn.addEventListener('click', decreaseBoredom);




