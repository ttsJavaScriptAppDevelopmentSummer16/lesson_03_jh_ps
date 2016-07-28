// Define a hands array with the values 'rock', 'paper', and 'scissors';
var hands = ['rock', 'paper', 'scissors'];

//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
 function getHand(){
    return hands[parseInt(Math.random()*10%3)];
}
// console.log("Testing Math Random =  " + gethand());

//Define two objects for two players. Each player has name and getHand() properties.
var player1 = {
    name: "Jude",
    hand: getHand,
    showHand: ''


};
// console.log("Testing Player " + player1.name + " Hand  =  " + player1.hand);


var player2 = {
    name: "Priyam",
    hand: getHand,
    showHand: ''

};
// console.log("Testing Player " + player2.name + " Hand  =  " + player2.hand);

//Define a function called playRound() that Takes two player objects as arguments
var playRound = function(player1, player2){
    // console.log('player1 hand' + player1.hand());
    // player1.hand = player1.hand();
    // player2.hand = player2.hand();
    player1.showHand = player1.hand();
    player2.showHand = player2.hand();
    console.log(player1.showHand, player2.showHand);
 	return player1.showHand, player2.showHand;

};
// console.log("Testing Player Hands  =  " + player1.hand + " VS. " + player2.hand);

var player1score = 0;
var player2score = 0;

//looping for cumulative scores
// while ((player1score < 5) || (player2score < 5)) {

//Gets hands from each and Determines the winner
playRound(player1, player2);

    if (player1.showHand === player2.showHand){
        console.log("It's a tie - no winner");
    } else if
    ( //condition player1 wins
      (player1.showHand === 0 && player2.showHand === 2) ||
      (player1.showHand === 1 && player2.showHand === 0) ||
      (player1.showHand === 2 && player2.showHand === 1)
    )
    {
      player1score = player1score + 1;
      console.log( player1.name + " WINS ");

    } else
    { // player2 wins
      player2score = player2score + 1;
      console.log( player2.name + " WINS ");
    }

console.log( player1.name + " has won " +  player1score  + " games.");
console.log( player2.name + " has won " +  player2score  + " games.");

// }
