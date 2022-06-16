class LowerObstacle extends RectangularImage {
    constructor(img) {
        super (WIDTH, random(OBSTACLE_MIN_HEIGHT, OBSTACLE_MAX_HEIGHT), OBSTACLE_WIDTH, HEIGHT, img);
        this.endGame = false; 
    };

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
     
    };

    update () {
        this.x--;
    };

    collision(bird) {
        if (bird.x < (this.x + this.width) && 
            // bird.x + 50 > this.x && 
            // bird.y + bird.height - 10 > this.y &&
            bird.x + (bird.width - 20) > this.x && 
            bird.y + (bird.height - 10) > this.y &&
            !this.endGame) {
                this.endGame = true;
                alert("You died!");
                location.reload();
        };
    
    };


}


class UpperObstacle extends RectangularImage {
    constructor(img, lower) {
        super(lower.x, lower.y - 150 - lower.height, OBSTACLE_WIDTH, lower.height, img);
        this.endGame = false;
    };

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    };
    
    update () {
        this.x--;
    };

    collision(bird) {
        if (bird.x < (this.x + this.width) && 
            bird.y + 15 < (this.y + this.height) && 
            bird.x + (bird.width - 20) > this.x &&
            !this.endGame) {
                this.endGame = true;
                alert("You died!");
                location.reload(); 
        };
}
}


    
