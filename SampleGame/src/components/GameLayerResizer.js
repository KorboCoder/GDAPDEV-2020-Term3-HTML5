class GameLayerResizer extends ResizeListener{
    constructor(){
        super();
        this.padding = 40;
        this.setName("GameLayerResizer");
    }

    onEnter(){
        super.onEnter();
        this.onResize();
    }
    
    onResize(){
        let owner = this.getOwner();
        let ownerSize = owner.getContentSize();

        owner.x = cc.winSize.width/2 - owner.width/2;
        owner.y = cc.winSize.height/2 - owner.height/2;

        let scaleX = (cc.winSize.width - this.padding) / ownerSize.width;
        let scaleY = (cc.winSize.height - this.padding)/ ownerSize.height;

        let targetScale = 1
        if(scaleX < scaleY){
            targetScale = scaleX;
        }
        else{
            targetScale = scaleY;
        }
        owner.setScale(targetScale);
        this.isResizeContent = false;
    }
}