console.log("jeg er i script")

const lblMessage = document.querySelector(".message") //lbl = label. pb for button
const llbNumber = document.querySelector(".number")
let lblScore = document.querySelector(".score")
const inpGuess = document.querySelector(".guess") //input felt
console.log(inpGuess)
const pbAgain = document.querySelector(".again")

//i consollen kan ting ændres dynamisk mens programmet køre. Kan man i js men ikke java
//skriv fx lblMessage.textcontent = 'gukh' og så ændre det element som lblMessage har fat i
//(med selectoren .message på)

inpGuess.value = 10 //man kan også sette værdier her som i consollen i inspect
//nu starter den på 10^

const pbCheck = document.querySelector(".check") //fordi det er en knap skal vi have en funktion
//skal udskrive det vi har tastet ind i inputfeltet hver gang man taster noget ind


let ran2 = 0
function getRandomNumber(){
    const ranNum = Math.random()*20
    ran2 = Math.trunc(ranNum) //trunc fjerner alt efter kommaet
    console.log(ran2)
}

//Kaldes hver gang knappen trykkes, så udskrives det:
function checkNumber(e){
    console.log(inpGuess.value)
    console.log(ran2)
    const guess = inpGuess.value //får string ind fra inputfelt
    console.log(lblScore.textContent)
    if (guess == ran2){
        lblScore.textContent = "kurt"
        console.log("korrekt")
    } else console.log("forkert")
}
window.addEventListener('load', getRandomNumber)
pbAgain.addEventListener('click', getRandomNumber)
pbCheck.addEventListener('click', checkNumber) //husk addeveentlistener når function på knappen skal kaldes