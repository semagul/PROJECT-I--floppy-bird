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
    this.audio;

  };

 
  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/background.png")},
      { src: loadImage("assets/ground.png")}
  ];
    this.obstacleImages = {
    lower: loadImage("assets/pipe-green.png"),
    upper: loadImage("assets/pipe-green-down.png")
  };

    this.birdImage = loadImage("assets/bird.gif");
    this.audio = loadSound("assets/Fluffing-a-Duck.mp3");
    this.bird = new Bird(this.audio); 

  };


  draw() {	
    this.background.draw();

    if (frameCount % 250 === 0 && this.gameStarted) {
      let lower = new LowerObstacle(this.obstacleImages.lower, this.audio);
      let upper = new UpperObstacle(this.obstacleImages.upper, lower, this.audio);
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


    textFont("Courier New", 70);	
    text(`${this.counter}`, 280, 100);


  };

}
