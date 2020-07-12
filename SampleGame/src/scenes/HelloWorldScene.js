class HelloWorldScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
}