class EnterNameScene extends cc.Scene{    
    constructor(){
        super();
    }
    onEnter(){
        super.onEnter();
        
        let titleLayer = new EnterNameLayout();
        this.addChild(titleLayer)
    }
}