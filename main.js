

//Constants for the stats
const hungerStat = document.querySelector('#hunger')
const sleepinessStat = document.querySelector('#sleepiness')
const boredomStat = document.querySelector('#boredom')
const ageStat = document.querySelector('#age')


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
const myPetStart = {
    hungerStart: 1,
    sleepinessStart: 1,
    boredomStart: 1,
    ageStart: 1
}

const intervalInscreaseStats = setInterval(increaseStats, 500)
//Incrementing the stats every second.
function increaseStats() {
    if (myPetStart.hungerStart < 10 || myPetStart.sleepinessStart < 10 || myPetStart.boredomStart < 10){
    myPetStart.hungerStart += 1;
    myPetStart.sleepinessStart += 1;
    myPetStart.boredomStart += 1;
    myPetStart.ageStart += 1;
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




const decreaseHunger = () => {
    if(myPetStart.hungerStart > 0 && myPetStart.hungerStart < 10){
    myPetStart.hungerStart -= 1;
    hungerStat.textContent = "Hunger: " + myPetStart.hungerStart;
    }
}
feedBtn.addEventListener('click', decreaseHunger);


const decreaseSleepy = () => {
    if(myPetStart.sleepinessStart > 0 && myPetStart.sleepinessStart < 10){
    myPetStart.sleepinessStart -= 1;
    sleepinessStat.textContent = "Sleepiness: " + myPetStart.sleepinessStart;
    }
}
lightBtn.addEventListener('click', decreaseSleepy);


const decreaseBoredom = () => {
    if(myPetStart.boredomStart > 0 && myPetStart.boredomStart < 10){
    myPetStart.boredomStart -= 1;
    boredomStat.textContent = "Boredom: " + myPetStart.boredomStart;
    }
}
playBtn.addEventListener('click', decreaseBoredom);

// const hungerIncrease = setInterval( function () {
//     increaseHunger(); {
//         if(hungerStart < 10){
//             hungerStart++;
//             myPetStart.hungerStat.innerText = hungerStart;
//         } else alert("Your TamaGucci died from hunger.")
//     }
// }, 5000);


