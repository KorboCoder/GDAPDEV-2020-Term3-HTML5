class VerticalLayout extends ccui.VBox{
    constructor(){
        super(cc.winSize);
    }

    onEnter(){
        super.onEnter();
        for(let i = 0; i < 10; i++){
            this.createText(`Test: ${i}`);
        }

    }

    createText(message){
        let text = new ccui.Text(message, "Pixel", 32);
        this.addChild(text);
    }

}