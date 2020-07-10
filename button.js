class Button extends GameObject{

    constructor(x, y, width, height){
        super(x,y);
        this.width = width
        this.height = height;
        this.graphics.beginFill("#007700").drawRect(0,0,width,height);
    }

}