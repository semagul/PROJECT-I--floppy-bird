class Game {
  constructor() {
    this.background = new Background();
    this.bird = new Bird();
    this.obstacles = [];

    this.obstacleImages = [];
    this.backgroundImages = [];
    this.birdImage;
    // this.rand = 100;
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/background.jpg")},
      { src: loadImage("assets/ground.png")}
  ]
    this.obstacleImages = [
      { src: loadImage('assets/pipe.png')},
      { src: loadImage('assets/pipedown.png')}
    ]
    this.birdImage = loadImage('assets/bird.png')
  }

  draw() {
    this.bird.draw();
    this.background.draw();


    if (frameCount % 150 === 0) {
      // this.rand = Math.floor(random(150, 400));
			this.obstacles.push(new Obstacles(this.obstacleImages[0].src))
      
    }

	  this.obstacles.forEach(function(obstacles) {
        obstacles.draw()
    })
  }
}
