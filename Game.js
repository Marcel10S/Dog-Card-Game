var oneUncover = false;
var cards = ["Dog1.jpg","Dog2.jpg","Dog3.jpg","Dog4.jpg","Dog5.jpg","Dog6.jpg","Dog1.jpg","Dog2.jpg","Dog3.jpg","Dog4.jpg","Dog5.jpg","Dog6.jpg"];
var randomCards = [];
var firstCard;
var secondCard;
var randomCard1;
var randomCard2;
var lock = false;
var n = 0;
var nOP = 0;

function prepareHiddenCardsTable () {     // stworzenie tablicy z losowo ustawionymi elementami

for (var i = 0; i != 12; i++) {
let cardsLength = cards.length;
var random = Math.floor(Math.random() * (cardsLength - 1));
randomCards[i] = cards[random];
cards.splice(random,1);

}}
prepareHiddenCardsTable();

function changeCard(cardNr) {
if (oneUncover == false && lock == false) {

  randomCard1 = randomCards[cardNr - 1];
  firstCard = $('#Dog'+cardNr);
  firstCard.css('background-image', 'url('+randomCards[cardNr - 1]+')');
  oneUncover = true;

}
else if (oneUncover == true && lock == false) {

  lock = true;
  randomCard2 = randomCards[cardNr - 1];
  secondCard = $('#Dog'+cardNr);
  $('#Dog'+cardNr).css('background-image', 'url('+randomCards[cardNr - 1]+')');

  n++;
  $('#Counter').html('Rounds Counter: '+n);

  oneUncover = false;
  if (randomCard1==randomCard2) {
  setTimeout(pairOfCards, 900);
  }
  else {
  setTimeout(hideCards, 900);
  }


}}

function hideCards() {
  firstCard.css('background-image', 'url(DogStarter.jpg)');
  secondCard.css('background-image', 'url(DogStarter.jpg)');
  lock = false;
}
function pairOfCards () {
firstCard.css({
  'background-image': 'url()',
  'background-color': '#2E4053',
  'border-color': '#2E4053',
});
secondCard.css({
  'background-image': 'url()',
  'background-color': '#2E4053',
  'border-color': '#2E4053',
});
firstCard.off();
secondCard.off();
  lock = false;
  nOP++;
  if (nOP==6) {
setTimeout(bigWin, 200);
}}

function bigWin () {
alert("Congratulations on completing the game in " + n + " turns :)")
}


$(document).ready(function (){

$('#Dog1').on('click', function (){changeCard(1)});
$('#Dog2').on('click', function (){changeCard(2)});
$('#Dog3').on('click', function (){changeCard(3)});
$('#Dog4').on('click', function (){changeCard(4)});

$('#Dog5').on('click', function (){changeCard(5)});
$('#Dog6').on('click', function (){changeCard(6)});
$('#Dog7').on('click', function (){changeCard(7)});
$('#Dog8').on('click', function (){changeCard(8)});

$('#Dog9').on('click', function (){changeCard(9)});
$('#Dog10').on('click', function (){changeCard(10)});
$('#Dog11').on('click', function (){changeCard(11)});
$('#Dog12').on('click', function (){changeCard(12)});

});
