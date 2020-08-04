class PongLayer extends cc.LayerColor{
    constructor(){
        super(cc.color(0,100,0,255), 800, 700);
        let paddle = new Paddle(100, 50);
        
        this.addChild(paddle);
    }
}