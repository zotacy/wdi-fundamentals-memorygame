let result;
let cards = ["queen","queen","king","king"]; //set variable array
let cardsInPlay = []; //set empty array
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
// setting up a flipcard function
function flipCard(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2){
	checkForMatch();
	}
}
flipCard(0);
flipCard(2);
// Seeting up variables

