class MainScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        //let pongLayer = new PongLayer();
        //this.addChild(pongLayer)
        let landscapeUI = new LandscapeLayout();
        let portraitUI = new PortraitLayout();

        this.addChild(landscapeUI)
        this.addChild(portraitUI)
    }
}