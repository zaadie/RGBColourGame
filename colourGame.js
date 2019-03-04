// var game = {};
// game.init = function(){
//     setupModeButtons();
//     setupSquares();
//     reset();
// }
// game.init();

var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listener
    setupModeButtons();
    setupSquares();
    //generates colours
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            //Use tenary operator for to set numSquares variable
            //figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        })
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab colour of clicked square
            var clickedColour = this.style.background;
            //compare colour to pickedColour
            // console.log(clickedColour, pickedColour);
            if(clickedColour === pickedColour){
                messageDisplay.textContent = "Correct";
                resetButton.textContent ="Play Again?"
                changeColours(clickedColour);
                h1.style.background = clickedColour;
            } else {
                this.style.background="#0D1B2A";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}


function reset(){
      //generate all new colours according to hard/easy mode
      colours = generateRandomColours(numSquares); 
      //pick a new random colour from array
      pickedColour = pickColour();
      //change colourDisplay to match pickedColours
      colourDisplay.textContent = pickedColour;
      resetButton.textContent = "New Colours";
      messageDisplay.textContent = "";
      //change colours of squares
      for(var i = 0; i < squares.length; i++){
          if(colours[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colours[i];    
          } else {
              squares[i].style.display = "none";
          }
      }
      h1.style.background = "#9D6A89";
}

//--------CODE CLEAN UP------------
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colours = generateRandomColours(numSquares);
//     pickedColour = pickColour();
//     colourDisplay.textContent = pickedColour;
//     for (var i = 0; i < squares.length; i++){
//         if(colours[i]){
//             squares[i].style.background = colours[i];
//         } else{
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colours = generateRandomColours(numSquares);
//     pickedColour = pickColour();
//     colourDisplay.textContent = pickedColour;
//     for (var i = 0; i < squares.length; i++){
//         squares[i].style.background = colours[i];
//         squares[i].style.display = "block";
//     }
// })

resetButton.addEventListener("click", function(){
    reset();
})

//Loop through each square to give it the corresponding colour in 
// in the colours array

function changeColours(colour){
     //loop through all squares
    for (var i = 0; i < squares.length ; i++){
        //change each colour to match given colour
        squares[i].style.background = colour;
    }
}

function pickColour(){
    //Generate a random whole number reflective of the colour array size
   var random = Math.floor(Math.random() * colours.length);
   return colours[random];
}

function generateRandomColours(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random colour and push into arr
        arr.push(randomColour());
    }
    //return that array
    return arr;
}

function randomColour(){
    //pick a "red" from 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}