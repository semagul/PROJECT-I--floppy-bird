class RectangularImage { 
    constructor(x, y, width, height, img) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        };

    doesOverlap(other) {
        // if (other.y < this.y + this.height
        //     && other.y > this.y
        //     && other.x > this.x
        //     && other.x > this.x + this.width) {
        //     return true;
        // };

        if (this.x < other.x && 
            (this.x + this.width) > other.x &&
            (this.y > other.y) && 
            (this.y - this.height) < (other.y - other.width)) {
            return true;
        };
    }
}