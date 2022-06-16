class Background {
    constructor() {
    this.x1 = 0;
    this.x2 = WIDTH;
    this.scrollSpeed = 0.8;
}
    draw() {
        image(game.backgroundImages[0].src, 0, 0, WIDTH, HEIGHT);
        image(game.backgroundImages[1].src, this.x1, (HEIGHT - GROUNDHEIGHT), WIDTH, GROUNDHEIGHT);  
        image(game.backgroundImages[1].src, this.x2, (HEIGHT - GROUNDHEIGHT), WIDTH, GROUNDHEIGHT);   

        this.x1 -= this.scrollSpeed;
        this.x2 -= this.scrollSpeed;
    
        if (this.x1 < -WIDTH){
            this.x1 = WIDTH;
        }

        if (this.x2 < -WIDTH){
            this.x2 = WIDTH;
        }

    }
}
       

