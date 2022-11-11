class Bird extends RectangularImage {
    constructor(audiofile) {
        super(HEIGHT / 2 - 20, HEIGHT / 2 - 15, 40, 30, game.birdImage, audiofile)
        this.velocity = 0;
        this.gravity = 0.2;
        this.gameStarted = false;
    };

    draw() {
        if (this.gameStarted || this.y <= 0 - this.height) {
            this.velocity += this.gravity;
            this.y += this.velocity;
        };


        if ((this.y >= 600 + this.height) && !this.endGame) {
            super.endGame();
        };

        image(this.img, this.x, this.y, this.width, this.height);
    };

    fly() {
        this.velocity = - 5
    };



};