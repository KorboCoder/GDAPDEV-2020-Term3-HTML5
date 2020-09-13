class PortraitLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnPortrait());
    }
    onEnter(){
        super.onEnter();
        let user = UserService.getInstance().currentUser
        let score = new ccui.Text(`User: ${user.name}\nScore: 999`, "Pixel", 36);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        score.setLayoutParameter(layoutParameter);

        this.addChild(score);
    }
}