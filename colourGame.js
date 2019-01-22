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
var colours = generateRandomColours(6);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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