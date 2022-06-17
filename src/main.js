const game = new Game();

let audio;
function preload() {
  game.preload(); 
  audio = loadSound("assets/music/Fluffing-a-Duck.mp3"); 
};

function setup() {
  createCanvas(WIDTH, HEIGHT); 
  frameRate(60);
};

function draw() {
  game.draw();  
};

function keyPressed() {
  if (keyCode == 32) {
    game.gameStarted = true;
    game.bird.gameStarted = true;
    game.bird.fly();
    audio.play();
  };
};
 