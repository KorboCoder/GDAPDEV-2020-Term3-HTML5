class FitToParent extends cc.Component{
    onEnter(){
        super.onEnter();
        cc.assert(this.getOwner() instanceof ccui.Widget, "Componnent compatible only with ccui.Widget")
        this.listener = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: 'canvas-resize',
            callback: this.onResize.bind(this)
        });
        cc.eventManager.addListener(this.listener, this.getOwner());
        this.isResizeContent = true;
    }

    onResize(){
        this.isResizeContent = true;
    }
    
    update(dt){
        if(this.isResizeContent){
            let owner = this.getOwner();

            let ownerSize = owner.getContentSize();
            let parentSize = owner.getParent().getContentSize();

            let scaleX = parentSize.width / ownerSize.width;
            let scaleY = parentSize.height / ownerSize.height;

            let targetScale = 1
            if(scaleX < scaleY){
                targetScale = scaleX;
            }
            else{
                targetScale = scaleY;
            }
            
            if(targetScale > 1){
                targetScale = 1
            }
            owner.setScale(targetScale);
            this.isResizeContent = false;
        }
    }

}