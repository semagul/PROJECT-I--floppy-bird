class Game {
  constructor() {
    this.background = new Background();
    this.bird = new Bird();
    // delete pipes here x < 0 - width of image
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
  ];
    this.obstacleImages = {
    lower: loadImage('assets/pipe.png'),
    upper: loadImage('assets/pipedown.png')
  };
    
    this.birdImage = loadImage('assets/bird.png')
  };

  draw() {

    this.background.draw();
  
    if (frameCount % 250 === 0) {
      // this.rand = Math.floor(random(150, 400));
      let lower = new LowerObstacle(this.obstacleImages.lower);
      let upper = new UpperObstacle(this.obstacleImages.upper, lower);
			this.obstacles.push(lower);
      this.obstacles.push(upper);
    };

	  this.obstacles.forEach(obstacles => {
      obstacles.update();  
      obstacles.draw();
    });

    this.bird.draw();
  }
}
