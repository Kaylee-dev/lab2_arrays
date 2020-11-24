
var spellen = ['Monopoly', 'Yathzee', 'Bridge', 'Poker', 'Pesten', 'Mens erger je niet', 'Cluedo'];

var randomNumber = Math.floor((Math.random() * 7));
console.log(randomNumber);

document.write(spellen[randomNumber]);