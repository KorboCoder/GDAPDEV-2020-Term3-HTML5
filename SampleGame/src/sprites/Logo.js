class Logo extends cc.Sprite{
    constructor(img){
        super(img);
        this.scheduleUpdate();
        Logo.SPEED = 100;
    }

    update(dt){
        this.x = this.x + Logo.SPEED*dt;
    }

}