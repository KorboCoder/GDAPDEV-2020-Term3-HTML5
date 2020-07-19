class MainScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let pongLayer = new PongLayer();
        this.addChild(pongLayer)
    }
}