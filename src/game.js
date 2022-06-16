class Game {
  constructor() {
    this.background = new Background();
    this.bird;
    this.obstacle = [];
    this.obstacleImages = [];
    this.backgroundImages = [];
    this.birdImage;
  };


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
    this.bird = new Bird();
  };


  draw() {		
    this.background.draw();
    if (frameCount % 250 === 0) {
      let lower = new LowerObstacle(this.obstacleImages.lower);
      let upper = new UpperObstacle(this.obstacleImages.upper, lower);
			this.obstacle.push(lower);
      this.obstacle.push(upper);
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
  };

}
