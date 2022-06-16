class Bird extends RectangularImage {
    constructor() {
        super (HEIGHT/2, HEIGHT/2, 60, 50, game.birdImage)
        // this.x = HEIGHT/2;
		// this.y = HEIGHT/2;
		// this.width = 60;
		// this.height = 50;        
        this.velocity = 0;
        this.gravity = 0.2;
        this.endGame = false; 
    };

    draw() {
		this.velocity += this.gravity;
		this.y += this.velocity;


		if ((this.y >= HEIGHT || this.y < 0 - this.height) && !this.endGame) {
            this.endGame = true;
            alert("You died!");
            location.reload();
		};
        image(this.img, this.x, this.y, this.width, this.height);

    };

    fly() {
        console.log('fly');
        this.velocity = - 5
    };
}