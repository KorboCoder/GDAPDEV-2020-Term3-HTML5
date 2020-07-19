class ToMainScene extends cc.Component{
    onEnter(){
        super.onEnter();
        this.listener = cc.EventListener.create({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: this.onKeyPressed
                //onKeyReleased
        });
        cc.eventManager.addListener(this.listener, 
            this.getOwner());
        
    }

    onKeyPressed(key, event){
       console.log(key);
       console.log(event); 
       cc.director.runScene(new MainScene());
    }

}