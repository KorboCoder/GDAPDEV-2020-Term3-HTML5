class PercentSizingLayout extends ccui.HBox{
    constructor(){
        super(cc.winSize);
    }

    onEnter(){
    super.onEnter();
       this.scheduleUpdate();
       this.addComponent(new FitToWindow());
       let divisions = 5;
       for(let i = 0; i < divisions; i++){
        this.createVerticalLayout(i, divisions);
       }
    }

    createVerticalLayout(index, divisions){
        let vertLayout = new VerticalLayout();
        vertLayout.setSizeType(ccui.Widget.SIZE_PERCENT)
        vertLayout.setSizePercent(cc.p(1/divisions, 1.0))
        vertLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        vertLayout.setBackGroundColor(cc.color((255/divisions)*index + 50, 0, 0, 255))
        this.addChild(vertLayout);
    }

}