class Game {
  constructor() {
    this.background = new Background();
    this.bird;
    this.obstacle = [];
    this.obstacleImages = [];
    this.backgroundImages = [];
    this.birdImage;
    this.gameStarted = false;
    this.counter = 0;
  };


  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/background2.png")},
      { src: loadImage("assets/ground2.png")}
  ];
    this.obstacleImages = {
    lower: loadImage('assets/pipe-green.png'),
    upper: loadImage('assets/pipe-green-down.png')
  };
    
    this.birdImage = loadImage('assets/bird.gif');
    this.bird = new Bird();
  };


  draw() {	
    this.background.draw();
    if (frameCount % 250 === 0 && this.gameStarted) {
      let lower = new LowerObstacle(this.obstacleImages.lower);
      let upper = new UpperObstacle(this.obstacleImages.upper, lower);
			this.obstacle.push(lower);
      this.obstacle.push(upper);

    };

    if (frameCount % 60 === 0 && this.gameStarted) {
        this.counter++;
    };

	  this.obstacle.forEach(obstacle => {
      obstacle.update();  
      obstacle.draw();
      obstacle.collision(this.bird);
    });

    this.bird.draw();

		this.obstacle = this.obstacle.filter((obstacle) => {
			if (obstacle.x < 0 - OBSTACLE_WIDTH) {
				return false
			} else {
				return true
			};
		});

    textSize(50);	
    text(`${this.counter}`, 300, 100);
  };

}
