class Bird {
    constructor() {
        this.x = HEIGHT/2;
		this.y = HEIGHT/2;
		this.width = 60;
		this.height = 50;        
        this.gravitySpeed = 0;
        this.gravity = 0.01 ;
        this.speedX = 0;
        this.speedY = 0;
    };

    draw() {
        // this.velocity += 1;
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        // if (this.y >= height - this.height) {
		// 	// reset him to the starting position
		// 	this.y = height - this.height
		// }
        image(game.birdImage, this.x, this.y, this.width, this.height) 
    };

    fly() {
        console.log('fly');
        this.y -=  30;
    };
}