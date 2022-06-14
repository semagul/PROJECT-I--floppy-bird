class LowerObstacle {
    constructor(img) {
        //this.height = random(OBSTACLE_MIN_HEIGHT, OBSTACLE_MAX_HEIGHT);  
        this.height = HEIGHT/2;
        this.width = OBSTACLE_WIDTH; 
        this.x = WIDTH;
        //this.y = HEIGHT - this.height; 
        this.y = random(OBSTACLE_MIN_HEIGHT, OBSTACLE_MAX_HEIGHT);
        this.img = img;
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height)


    }
//delete the  pipes 
    update () {
        this.x--;

    }
}


class UpperObstacle  {
    constructor(img, lower) {
        this.width = OBSTACLE_WIDTH;
    // I stored UpperObstacle(img, lower) on game line 33
        this.height = lower.height;
        this.x = lower.x;
        this.y = lower.y - 50 - img.height;
        this.img = img;
    }
    draw() {
        image(this.img, this.x, this.y, this.width, this.height)
    }
    
    update () {
        this.x--;

    }
}