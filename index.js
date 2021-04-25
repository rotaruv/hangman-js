/*
STEPS:
1. Create an array with some words --> wordsArray
2. Chose a random word from that array --> randomWord
3. Create and empty array chosenWordArray. Fill it with '_'. 
   Transform the array in string. Display the string
4. Create an array with all buttons (from a to z). 
   Adding an eventListener for each button which checks if the letter is in the chosen word
5. Adding a refresh page option
*/
const wordsArray = ['ana', 'ono', 'iui'];
const wordsNumber = wordsArray.length

const randomNumber = Math.floor(Math.random() * wordsNumber);
const randomWord = wordsArray[randomNumber]
const randomWordLen = randomWord.length

let chosenWordArray = []

for (let i = 0; i < randomWordLen; i++) {
    chosenWordArray.push(" _ ")
}

let chosenWord = chosenWordArray.join(" ")
document.querySelector("h2").innerText = chosenWord;

const buttonsArray = document.querySelectorAll("button");

let lives = 6
//Make a copy of randomWordLen
let lettersLeft = randomWordLen
//isValid is true if we still have lives and if there are still letters to guess in the word
let isValid = true
buttonsArray.forEach(button => {
    //isLetterIn checks if the chosen letter is in the word
    let isLetterIn = false
    button.addEventListener("click", function() {
        if (isValid) {
            for(i = 0; i < randomWordLen; ++i) {
                if (randomWord[i] === button.value) {
                    chosenWordArray[i] = button.value
                    isLetterIn = true
                    lettersLeft -= 1
                    document.getElementById(randomWord[i]).style.visibility = 'hidden'
                }
                chosenWord = chosenWordArray.join(" ")
                document.querySelector("h2").innerText = chosenWord;
            }
            if (lettersLeft === 0) {
                document.getElementById("img").src = "images/7.jpg"
                isValid = false
            }
            else if (!isLetterIn) {
                lives -= 1
                document.getElementById("img").src = "images/" + lives + ".jpg"
                if (lives === 0) {
                    isValid = false
                }
            }   
        }    
    })   
})

document.getElementById("refresh").addEventListener("click", function() {
    window.location.reload()
})





