class FitToWindow extends cc.Component{
    onEnter(){
        super.onEnter();
        cc.assert(this.getOwner() instanceof ccui.Layout, "Componnent compatible only with ccui.Layout")
        this.listener = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: 'canvas-resize',
            callback: this.onResize.bind(this)
        });
        cc.eventManager.addListener(this.listener, this.getOwner());
        this.isResizeContent = false;
    }

    onResize(){
        this.isResizeContent = true;
    }
    
    update(dt){
        if(this.isResizeContent){
            this.getOwner().setContentSize(cc.winSize);
            this.isResizeContent = false;
        }
    }

}