class Game {
  constructor() {
    this.background = new Background();
    this.bird;
    this.obstacle = [];
    this.obstacleImages = [];
    this.backgroundImages = [];
    this.birdImage;
    // this.rand = 100;
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
    if (frameCount % 180 === 0) {
      console.log(frameCount);
      console.log(frameCount % 250);
      // this.rand = Math.floor(random(150, 400));
      let lower = new LowerObstacle(this.obstacleImages.lower);
      let upper = new UpperObstacle(this.obstacleImages.upper, lower);
			this.obstacle.push(lower);
      this.obstacle.push(upper);
    };

	  this.obstacle.forEach(obstacle => {
      obstacle.update();  
      obstacle.draw();
    });

    this.bird.draw();

    // for (let i = 0; i < this.obstacle.length; i++) {
    //   if (this.bird.doesOverlap(this.obstacle[i]) === false) {
    //       console.log("you died BIETCH!")
    //   };
    // };

		this.obstacle = this.obstacle.filter((obstacle) => {
			if (obstacle.x < 0 - OBSTACLE_WIDTH) {
				return false
			} else {
				return true
			};
		});
  };
}
