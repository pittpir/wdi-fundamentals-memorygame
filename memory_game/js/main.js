console.log("Up and running!");
/*
var cardOne = "queen";
var CardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/


var cards = [ "queen", "queen", "king", "king" ];

var cardsInPlay = [];
var cardOne = cards[1];
cardsInPlay.push(cardOne);

cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2)
{
    console.log("The length is equal to 2");
} 
if (cardsInPlay[0] === cardsInPlay[1] )
{
    alert("You found a match");
} else {
    alert("Sorry, try again!");
}

console.log("User flipped " + cardsInPlay[1]);