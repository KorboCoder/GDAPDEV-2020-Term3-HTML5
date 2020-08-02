class AbsoluteLayout extends ccui.Layout{
    constructor(){
        super();
    }

    onEnter(){
        super.onEnter();
        this.setContentSize(cc.winSize);
        for(let i = 0; i < 20; i++){
            this.createText(`Test: ${i}`);
        }
       
    }

    createText(message){
        let text = new ccui.Text(message, "Pixel", 32);
        text.setPositionType(ccui.Widget.POSITION_PERCENT)
        text.setPositionPercent(cc.p(Math.random(),Math.random()) );
        this.addChild(text);

        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
    }

}