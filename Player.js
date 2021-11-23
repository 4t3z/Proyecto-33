class Player extends baseClass{
    constructor(x,y){
        super(x,y,30,30);
        this.distance = 0;
        this.image = loadImage("jugador.jpg");
    }
}