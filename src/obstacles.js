class Obstacles {
    constructor() {
        this.height = Math.random() * OBSTACLE_MAX_HEIGHT + OBSTACLE_MIN_HEIGHT;  
        this.width = OBSTACLE_WIDTH; 
         // the hardcode below later be changed 
        this.x = (Math.random() * 1100) + 200;
        
        this.y = HEIGHT - this.height;  
    }

    draw() {
        image(game.obstacleImages[0].src, this.x, this.y, this.width, this.height)
        // image(game.obstacleImages[1].src, this.x, this.y, this.width, this.height)
    
        // this.x1 -= 2;
        // this.x2 -= this.obstacleScrollSpeed;
    
        // if (this.x1 < -width){
        //     this.x1 = width;
        //     }

        // if (this.x2 < -width){
        //     this.x2 = width;
        // }

}
}