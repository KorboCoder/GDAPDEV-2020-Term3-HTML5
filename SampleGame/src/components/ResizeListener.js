class ResizeListener extends cc.Component {
    constructor() {
        super();
    }
    onEnter() {
        super.onEnter();
        this.listener = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: 'canvas-resize',
            callback: this.onCanvasResize.bind(this)
        });
        cc.eventManager.addListener(this.listener, this.getOwner());
        this.isResizeContent = false;
    }

    onCanvasResize() {
        this.isResizeContent = true;
    }
    onResize() {
    }

    update(dt) {
        if (this.isResizeContent) {
            this.onResize();
            this.isResizeContent = false;
        }
    }

}
