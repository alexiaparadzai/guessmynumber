'use strict';

//this selector in query selector is the same you would use in css

//dom is connection between html and js, it stored in tree structure

//document is an entry point to the dom, the next child is usually the html element because thats usually the roots element, then html usually has two children, head and body, these are siblings
//whatever is in the html document is also in the dom
//dom methods and propertis are web apis



/*


console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 9;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


handling the click of a button

Javascript calls the function as soon as the event happens!

WE NEED TO DEFINE THE SECRET NUMBER OUTSIDE THE HANDLER FUNCTION

//changing the results into a number
//first scenario is always to assume that there is no input

This is how you generate a random number, multily by 20 so that it  goes to 20  and then truncate it 
 Math.trunc(Math.random()*20)

 we generate the magic number and change the html class to it

//*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){document.querySelector('.message').textContent = message;}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is not input
  if(!guess) {
displayMessage('No number!');

//WHEN THE PLAYER WINS the game the background turns green
  } else if ( guess === secretNumber) {
  displayMessage('you have selected the correct number!');
  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if(score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
//for css styles you need to specify a string
//we can use a terniary operator instead of many if ese statements
 
  }  else if (guess != secretNumber) {
    if(score > 1) {
      displayMessage( guess > secretNumber ? 'too high!': 'too low!') ;
      score --;
      document.querySelector('.score').textContent = score;
    } else{
      displayMessage('you lost the game!');
      document.querySelector('.score').textContent = 0;
    }


  }

});


document.querySelector('.again').addEventListener('click',function() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  displayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'


} );

