// alert("working!");
var colours = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");

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
        if(clickedColour === pickedColour){
            messageDisplay.textContent = "Correct";
            changeColours(clickedColour);
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