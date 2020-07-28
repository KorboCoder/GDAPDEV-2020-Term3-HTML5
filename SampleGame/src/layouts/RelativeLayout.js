class RelativeLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
    }

    onEnter(){
        super.onEnter();

        let alignArr = [
            "PARENT_TOP_LEFT",
            "PARENT_TOP_CENTER_HORIZONTAL",
            "PARENT_TOP_RIGHT",
            "PARENT_LEFT_CENTER_VERTICAL",
            "CENTER_IN_PARENT",
            "PARENT_RIGHT_CENTER_VERTICAL",
            "PARENT_LEFT_BOTTOM",
            "PARENT_BOTTOM_CENTER_HORIZONTAL",
            "PARENT_RIGHT_BOTTOM"
        ]

        for(let i = 0; i < alignArr.length; i++){
            let alignStr = alignArr[i];
            this.createText(alignStr.replace("PARENT_", ""), ccui.RelativeLayoutParameter[alignStr]);
        }
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
    }

    createText(message, alignment){
        let text = new ccui.Text(message, "Pixel", 24);
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(alignment);
        text.setLayoutParameter(layoutParameter);
        this.addChild(text);
    }
}