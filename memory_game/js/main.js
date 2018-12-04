console.log("Up and running!");
/*
var cardOne = "queen";
var CardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/


var cards = [ "queen", "queen", "king", "king" ];
var cardsInPlay = [];
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        } else {
        console.log("Sorry, try again.");
        }
}

function flipCard (CardId) {

    /*
    var cardOne = cards[1];
    cardsInPlay.push(cardOne);
    
    cardTwo = cards[2];
    cardsInPlay.push(cardTwo);
*/
    console.log("User flipped " + cards[CardId]);
    cardsInPlay.push(cards[CardId]);
    checkForMatch();
    /*
    if (cardsInPlay.length === 2)
    {
        console.log("The length is equal to 2");
    } 
    if (cardsInPlay[0] === cardsInPlay[1] )
    {
        //alert("You found a match");
    } else {
        //alert("Sorry, try again!");
    }
*/
    //console.log("User flipped " + cardsInPlay[1]);

}

flipCard(0);
flipCard(2);

