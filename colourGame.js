// alert("working!");
//hard coded array to initiate colours for squares
// var colours = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ]
var numSquares = 6;
var colours = generateRandomColours(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.background = colours[i];
        } else{
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++){
        squares[i].style.background = colours[i];
        squares[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    //generate all new colours according to hard/easy mode
    colours = generateRandomColours(numSquares); 
    //pick a new random colour from array
    pickedColour = pickColour();
    //change colourDisplay to match pickedColours
    colourDisplay.textContent = pickedColour;
    //change colours of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colours[i];    
    }
    h1.style.background = "#232323";
    messageDisplay.textContent = "";
})
colourDisplay.textContent = pickedColour;

//Loop through each square to give it the corresponding colour in 
// in the colours array

for(var i = 0; i < squares.length; i++){
    //add initial colours to squares
    squares[i].style.background = colours[i];

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
            this.style.background="#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

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