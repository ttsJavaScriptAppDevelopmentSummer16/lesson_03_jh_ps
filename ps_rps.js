var hands = ['rock', 'paper', 'scissors'];

function gethand(){
    return hands[parseInt(Math.random()*10%3)];
}

//console.log(gethand());

var player1 = {
    name: "Judy",
    hand: gethand()
};

var player2 = {
    name: "Priyam",
    hand: gethand()
};

function playAround(participant1, participant2){
  handParticipant1 = participant1.hand;
  handParticipant2 = participant2.hand;

  if (handParticipant1 === handParticipant2){
    console.log('It\'s a Tie!')
    return null
  }else if ((handParticipant1 === 'rock' && handParticipant2 === 'scissors') || (handParticipant1 === 'scissors' && handParticipant2 === 'paper') || (handParticipant1 === 'paper' && handParticipant2 === 'rock'))
  {
    console.log(participant1.name + ' chooses ' + handParticipant1)
    console.log(participant2.name + ' chooses ' + handParticipant2)
    console.log('\n' + participant1.name + ' wins!')
    return participant1
  }else {
    console.log(participant1.name + ' chooses ' + handParticipant1)
    console.log(participant2.name + ' chooses ' + handParticipant2)
    console.log('\n' + participant2.name + ' wins!')
    return participant2
  }
}

console.log(playAround(player1,player2));
