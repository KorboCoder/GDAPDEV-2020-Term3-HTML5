class GameLayerResizer extends ResizeListener{
    constructor(){
        super();
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

        let scaleX = (cc.winSize.width) / ownerSize.width;
        let scaleY = (cc.winSize.height)/ ownerSize.height;

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