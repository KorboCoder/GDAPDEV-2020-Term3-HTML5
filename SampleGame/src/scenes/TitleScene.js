class TitleScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let titleLayer = new TitleLayer();
        this.addChild(titleLayer)
    }
}