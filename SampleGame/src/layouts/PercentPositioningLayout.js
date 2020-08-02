class PercentPositioningLayout extends ccui.Layout{
    constructor(){
        super();
    }

    onEnter(){
        super.onEnter();
        this.setContentSize(cc.winSize);

        let text = new ccui.Text("Hello_World", "Pixel", 32);
        // Exact pixel
        //text.x = 300
        //text.y = 200
        text.setPositionType(ccui.Widget.POSITION_PERCENT)
        text.setPositionPercent(cc.p(.30,.20) );

        this.addChild(text);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
    }
}