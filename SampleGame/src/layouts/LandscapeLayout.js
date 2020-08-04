class LandscapeLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnLandscape());
    }
    onEnter(){
        super.onEnter();
        let score = new ccui.Text("Score: 999", "Pixel", 36);
        
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_LEFT);
        score.setLayoutParameter(layoutParameter);
        
        this.addChild(score);
    }
}