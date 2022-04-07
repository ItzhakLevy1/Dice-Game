let randomNumber1 = Math.floor(Math.random() * 6) + 1;  // Randomizing the first number

let randomDiceImage = "/dice" + randomNumber1 + ".png";     // Randomizing the first image's name

let randomImageSource = "images" + randomDiceImage ;    // Randomizing the first image's path location

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// If player 1 wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
}

else {
    document.querySelector("h1").innerHTML = "Its a draw.";
}
