class EnableOnPortrait extends ResizeListener{

    constructor(){
        super();
        this.setName("EnableOnPortrait");
    }
    onEnter(){
        super.onEnter();
        this.onResize();
    }
    onResize(){
        if(cc.winSize.width < cc.winSize.height){
            this.getOwner().setEnabled (true);
            this.getOwner().setVisible(true);
        }
        else{
            this.getOwner().setEnabled (false);
            this.getOwner().setVisible(false);
        }
    }

}