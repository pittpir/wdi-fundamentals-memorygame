console.log("Up and running!");
/*
var cardOne = "queen";
var CardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
*/


//var cards = [ "queen", "queen", "king", "king" ];
var cards = [
{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
}
];

function createBoard () {
    console.log("You found a match = " + cards.length);
    for (var i = 0; i < cards.length; i++)
    {
        //console.log("You found a match = " + cards.length);
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement); 
    }

}

var cardsInPlay = [];
function checkForMatch() { 
    if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
            alert("You found a match!")
        } else {
            console.log("Sorry, try again.");
            alert("Sorry, try again.")
        }
}


function flipCard () {

    var cardId = this.getAttribute('data-id');
    console.log("User flipped " + cardId);
    /*
    var cardOne = cards[1];
    cardsInPlay.push(cardOne);
    
    cardTwo = cards[2];
    cardsInPlay.push(cardTwo);

    console.log("User flipped " + cards[CardId].rank);
    cardsInPlay.push(cards[CardId].rank);
    console.log("User flipped " + cards[CardId].cardImage);
    console.log("User flipped " + cards[CardId].suit);
 */   
    
    this.setAttribute('src',cards[cardId].cardImage)
    cardsInPlay.push(cards[cardId].rank);

    if (cardsInPlay.length > 1) {
        checkForMatch();
    }
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

createBoard();
//flipCard(0);
//flipCard(2);

