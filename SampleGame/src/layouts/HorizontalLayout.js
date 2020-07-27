class HorizontalLayout extends ccui.HBox{
    constructor(){
        super(cc.winSize);
    }

    onEnter(){
        super.onEnter();
        for(let i = 0; i < 5; i++){
            this.createText(`Test: ${i}`);
        }
    }

    createText(message){
        let text = new ccui.Text(message, "Pixel", 32);
        
        let layoutParameter = new ccui.LinearLayoutParameter();
        layoutParameter.setGravity(ccui.LinearLayoutParameter.TOP);
        layoutParameter.setMargin(50, 0,0,0);
        text.setLayoutParameter(layoutParameter);
        this.addChild(text);
    }

}