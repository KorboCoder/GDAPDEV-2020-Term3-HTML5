class EnterNameLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
    }

    onEnter(){
        super.onEnter();
        this.createHLayout();
        this.nameField = this.createTextField("First Name");
        this.createButtons();
    }

    createTextField(placeholder){
        let  textField = new ccui.TextField(placeholder, "Pixel", 32);
        this.hLayout.addChild(textField)
        let layoutParameter = new ccui.LinearLayoutParameter();
        layoutParameter.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL)
        layoutParameter.setMargin(0,50,0,20);
        textField.setLayoutParameter(layoutParameter);
        return textField
    }

    createButtons(){
        let button = new ccui.Button( res.Button9Slice_png, res.Button9SliceSelected_png);

        button.setScale9Enabled(true);
        button.setCapInsets(cc.rect(20, 20, 20, 20));
        button.setContentSize(cc.size(120,50));

        button.setTitleFontSize(26)
        button.setTitleFontName("Pixel")
        button.setTitleText("Create")

        let layoutParameter = new ccui.LinearLayoutParameter();
        layoutParameter.setGravity(ccui.LinearLayoutParameter.CENTER_HORIZONTAL)
        button.setLayoutParameter(layoutParameter);

        button.addClickEventListener(this.onClick.bind(this))
        this.hLayout.addChild(button);
    }

    onClick(){
        if(this.runningQuery){
            return;
        }
        this.runningQuery = true;

        UserService.getInstance().createUser(this.nameField.getString(),"")
        .then((res) => {
            cc.director.runScene(new MainScene());
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            this.runningQuery = false;
        })
    }



    createHLayout(){
        //hbox layout
        this.hLayout = new ccui.VBox(cc.size(500,200));
        let hLayout = this.hLayout;
        hLayout.setAnchorPoint(cc.p(0.5, 0.5));
        hLayout.addComponent(new FitToParent());
        this.addChild(hLayout);

        //hbox param layouting
        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.CENTER_IN_PARENT);
        hLayout.setLayoutParameter(layoutParameter);
        hLayout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        hLayout.setBackGroundColor(cc.color(0, 50, 0, 255));
    }

}