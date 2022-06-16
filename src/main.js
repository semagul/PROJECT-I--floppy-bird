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
};

function keyPressed() {
  if (keyCode == 32) {
    game.gameStarted = true;
    game.bird.gameStarted = true;
    game.bird.fly();
  };
};
 