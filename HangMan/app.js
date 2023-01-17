//These are the alphabet buttons
let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        console.log("The button was clicked")
    });
}
//The random word array
let randomWord = ["Basket Ball", "Harry Potter", "Dwayne The Rock Johnson", "Spider Man"]
let chosenWord = document.getElementById("chosenWord")


let generateWordButton = document.getElementById("wordGenerator");

//The random word button chooser
generateWordButton.addEventListener("click", function () {
    console.log("The Random Word Generator button has been clicked")
    chosenWord.innerHTML = randomWord[Math.floor(Math.random() * randomWord.length)];   
});





let resetBtn = document.getElementById("btnReset");
let clueButton = document.getElementById("btnClue");

clueButton.addEventListener("click", function(){
    console.log("You have clicked the clue button");
});

resetBtn.addEventListener("click", function(){
    console.log("You have clicked the reset button");
    chosenWord.innerHTML = ""
});

