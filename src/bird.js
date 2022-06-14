class Bird {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.3;
        this.x = HEIGHT/2;
		this.y = HEIGHT/2;
		this.width = 60;
		this.height = 50;
    }

    draw() {
        image(game.birdImage, this.x, this.y, this.width, this.height) 
    }

    fly() {
        console.log('fly')
        this.y -= 30
    }
}