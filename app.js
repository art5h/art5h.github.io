// Assuming 'node' is the target element after which you want to insert the smiley
var node = document.getElementById('head');

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random position
for (i = 0; i < 5; i++) {
  var randomTop = getRandomNumber(0, window.innerHeight); // Adjust 50 to the height of your smiley if different
  var randomLeft = getRandomNumber(0, window.innerWidth); // Adjust 50 to the width of your smiley if different

  var emoji = ['🛡️', '⚔️', '💥', '🗡️', '🏹', '💣'];
  var randomEmoji = getRandomNumber(0, emoji.length);
  
  var randomEmoji = emoji[randomEmoji];

  node.insertAdjacentHTML('afterend', `<div class="smiley" style="position: absolute; top: ${randomTop}px; left: ${randomLeft}px;">${randomEmoji}</div>`);

}

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";
// Get the button element
// Get the button element
// var button = document.getElementsByTagName('button')[0];
