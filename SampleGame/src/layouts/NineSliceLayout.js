class NineSliceLayout extends ccui.Layout{
    constructor(){
        super();
        this.setContentSize(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());

        let  popUp = new ccui.Layout();
        popUp.setAnchorPoint(cc.p(0.5,0.5));
        popUp.setPositionType(ccui.Widget.POSITION_PERCENT);
        popUp.setPositionPercent(cc.p(.50,.50) );
        popUp.setSizeType(ccui.Widget.SIZE_PERCENT);
        popUp.setSizePercent(cc.p(.50, .50));

        popUp.setBackGroundImageScale9Enabled(true);
        popUp.setBackGroundImage(res.Button9Slice_png,ccui.Widget.LOCAL_TEXTURE);
        let insetSize = 20;
        popUp.setBackGroundImageCapInsets(cc.rect(insetSize, insetSize, insetSize, insetSize))

        this.addChild(popUp);
    }

}