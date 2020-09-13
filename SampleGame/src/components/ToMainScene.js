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
        if (this.runningQuery){
            return;
        }

        this.runningQuery = true       
        UserService.getInstance().loadUser()
        .then(() => {
            cc.director.runScene(new MainScene());
        }
        )
        .catch((err) => {
            if(err.message == "NotExisting"){
                cc.director.runScene(new EnterNameScene());
            }
        })
        .finally( () => {
            this.runningQuery = false;
        });
    }

}