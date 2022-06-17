class RectangularImage { 
    constructor(x, y, width, height, img, audiofile) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.endGame = false;
        this.audio = audiofile;
    }; 

    endGame() {
        this.audio.stop();
        this.endGame = true;
        alert("You died!");
        location.reload();
    }    
};
