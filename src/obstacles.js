class Obstacles {
    constructor() {
        this.height = random(OBSTACLE_MIN_HEIGHT, OBSTACLE_MAX_HEIGHT);  
        this.width = OBSTACLE_WIDTH; 
        this.x = WIDTH;
        this.y = HEIGHT - this.height;  
    }

    draw() {
        this.x--;
        image(game.obstacleImages[0].src, this.x, this.y, this.width, this.height)


}
}