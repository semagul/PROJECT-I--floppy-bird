const game = new Game();

function preload() {
  game.preload(); 
};

function setup() {
  createCanvas(WIDTH, HEIGHT); 
  frameRate(60);
};

function draw() {
  game.draw();  
  if (game.bird.endGame === true) { 
    // || game.lower.endGame === true || game.upper.endGame === true) {
    game.audio.stop();
  }
};

function mouseClicked() {
  if (!game.gameStarted) {
    game.audio.play();
  };
  game.gameStarted = true;
  game.bird.gameStarted = true;
  game.bird.fly();
};


function keyPressed() {
  if (!game.gameStarted) {
    game.audio.play();
  };
  if (keyCode == 32) {
    game.gameStarted = true;
    game.bird.gameStarted = true;
    game.bird.fly();

  };


};


 