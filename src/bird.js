class Bird extends RectangularImage {
    constructor() {
        super (HEIGHT/2 - 30, HEIGHT/2 - 25, 70, 60, game.birdImage)    
        this.velocity = 0;
        this.gravity = 0.2;
        this.gameStarted = false;

    };

    draw() {
        if (this.gameStarted) {
		this.velocity += this.gravity;
		this.y += this.velocity;
        };

		// if ((this.y >= HEIGHT + this.height || this.y < 0 - this.height) && !this.endGame) {
            if ((this.y <= 0 - this.height/2 || this.y >= 600 - this.height/2) && !this.endGame) {
            this.endGame = true;
            alert("You died!");
            location.reload();
		};
        
        image(this.img, this.x, this.y, this.width, this.height);
    };

    fly() {
        this.velocity = - 5
    };
}