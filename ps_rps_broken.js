var weapons = ['rock', 'paper', 'scissors'];

function getHand(){
  return weapons[parseInt(Math.random()*10)%3];
}

var player1 = {
    name: "Judy",
    hand: function(){
      getHand();
  }
};

var player2 = {
    name: "Priyam",
    hand: function(){
      getHand();
    }
};

function playAround(participant1, participant2){
  var handParticipant1 = participant1.hand();
  var handParticipant2 = participant2.hand();

  if (handParticipant1 === handParticipant2){
    console.log('\n' + 'It\'s a Tie!');
    return null;
  }else if ((handParticipant1 === 'rock' && handParticipant2 === 'scissors') || (handParticipant1 === 'scissors' && handParticipant2 === 'paper') || (handParticipant1 === 'paper' && handParticipant2 === 'rock'))
  {
    console.log('\n' + participant1.name + ' chooses ' + handParticipant1);
    console.log(participant2.name + ' chooses ' + handParticipant2);
    console.log('\n' + participant1.name + ' wins the round');
    return participant1;
  }else {
    console.log('\n' + participant1.name + ' chooses ' + handParticipant1);
    console.log(participant2.name + ' chooses ' + handParticipant2);
    console.log('\n' + participant2.name + ' wins the round');
    return participant2;
  }
}

// console.log(playAround(player1,player2));
// console.log(playAround(player1,player2));
// console.log(playAround(player1,player2));
// console.log(playAround(player1,player2));

function playGame(participant1,participant2,playUntil){
  var scoreParticipant1 = 0;
  var scoreParticipant2 = 0;
  while (scoreParticipant1 < playUntil && scoreParticipant2 < playUntil){
    winner = playAround(participant1,participant2);
    console.log(winner)
    if (winner === participant1){
      scoreParticipant1 += 1;
    }else if (winner === participant2) {
      scoreParticipant2 += 1;
    }else {
    }
  }
  switch (scoreParticipant1 > scoreParticipant2) {
    case true:
      console.log('\n' + participant1.name + ' wins the game!')
      return participant1;
    case false:
      console.log('\n' + participant2.name + ' wins the game!')
      return participant2;
    default:
  }
}

console.log(playGame(player1,player2,5));