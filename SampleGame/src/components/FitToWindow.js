class FitToWindow extends ResizeListener{
    constructor(){
        super();
        this.setName("FitToWindow");
    }
    onEnter(){
        cc.assert(this.getOwner() instanceof ccui.Layout, "Componnent compatible only with ccui.Layout")
        super.onEnter();
    }

    onResize(){
        this.getOwner().setContentSize(cc.winSize);
    }
}