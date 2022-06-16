class LowerObstacle extends RectangularImage {
    constructor(img) {
        super (WIDTH, random(OBSTACLE_MIN_HEIGHT, OBSTACLE_MAX_HEIGHT), OBSTACLE_WIDTH, HEIGHT, img) 
    };

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    };

    update () {
        this.x--;
    };
}


class UpperObstacle extends RectangularImage {
    constructor(img, lower) {
        super(lower.x, lower.y - 200 - img.height, OBSTACLE_WIDTH, lower.height, img);
    };

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    };
    
    update () {
        this.x--;
    };
}



    
