var hands = ['rock', 'paper', 'scissors'];

function gethand(){
    return hands[parseInt(Math.random()*10%3)]
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
