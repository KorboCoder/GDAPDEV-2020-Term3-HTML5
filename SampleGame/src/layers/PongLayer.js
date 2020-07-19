class PongLayer extends cc.Layer{
    constructor(){
        super();

        let paddle = new Paddle(100, 50);
        this.addChild(paddle);
    }
}