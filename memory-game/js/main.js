// Set arrays
var cards = [
		{
		rank: "queen",
		suit: "hearts",
		cardImage:"images/queen-of-hearts.png",
		},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage:"images/queen-of-diamonds.png",
		},
		{
		rank: "king",
		suit: "hearts",
		cardImage:"images/king-of-hearts.png",
		},
		{
		rank: "king",
		suit: "diamonds",
		cardImage:"images/king-of-diamonds.png",
		} 
	];
var cardsInPlay = []; 
var resetButton = document.getElementById('reset');
//Set functions
function createBoard (){
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
function checkForMatch(){
	  if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		cardsInPlay.length = 0;
	  } else {
		alert("Sorry, try again.");
		console.log(cardsInPlay);
		cardsInPlay.length = 0;
	  };
};
// setting up a flipcard function
function flipCard(){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
   console.log('User Flipped ' + cards[cardId].rank);
   console.log(cards[cardId].suit);
   console.log(cards[cardId].cardImage);
   cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}
function resetGame(){
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.querySelector('img');
    	cardElement.remove();
    	console.log('removeboard' + i);
  	}
  	createBoard();
  	statusMessage.textContent = "Game has been reset! Go Again!"
}
resetButton.addEventListener('click', resetGame);
createBoard();