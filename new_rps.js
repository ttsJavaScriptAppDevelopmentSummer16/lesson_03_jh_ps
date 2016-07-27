var hands = ['rock', 'paper', 'scissors'];

function gethand(){
    return hands[parseInt(Math.random()*10%3)];
}

console.log(gethand());

var player1 = {
    name: "Judy",
    hand: gethand()
};

var player2 = {
    name: "Priyam",
    hand: gethand()
};
var playRound = function(player1, player2){
 	player1.hand();
 	player2.hand();

// hands but not tracking rounds yet

  if (player1.hand === player2.hand){
    console.log("It's a tie - no winner");
} else if ((player1.hand === 0 && player2.hand === 2) ||
    (player1.hand === 1 && player2.hand === 0) ||
    (player1.hand === 2 && player2.hand === 1)) {
      player1score = player1score +1;
      console.log( player1.name + " wins");
    }   else {
      player2score = player2score +1;
      console.log( player2.name + " wins");
    }
}
