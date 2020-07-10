class Ball extends GameObject{
    constructor(x, y, radius){
        super(x,y);
        this.radius = radius;
        this.SPEED = 1;
        this.is_right = false;
        this.is_left = false;
        this.graphics.beginFill("#FF0000").drawCircle(0,0,radius);
        
    }

    update(delta){
        //console.log(this.vector)
        if(this.is_left){
            this.x -= delta * this.SPEED;
        }
        else if(this.is_right){
            
            this.x += delta * this.SPEED;
        }
    }
    process_event(event){
        // uncomment to debug input events
        console.log(event);
        switch(event.code) {
            case 'KeyA':
                if (event.type == 'keydown') {
                    this.on_left_down();
                }
                else if (event.type == 'keyup') {
                    this.on_left_up();
                }
            break;
            case 'KeyD':
                if (event.type == 'keydown') {
                   this.on_right_down();
                }
                else if (event.type == 'keyup') {
                    this.on_right_up();
                }
            break; 
        }
    }

    on_left_down(even){
        this.is_left = true;
    }

    on_left_up(even){
        this.is_left = false;
    }

    on_right_down(event){
        console.log(event)
        this.is_right = true;
    }

    on_right_up(even){
        console.log(event)
        this.is_right = false;
    }
}