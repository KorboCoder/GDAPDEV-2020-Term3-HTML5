class Game{
    constructor(){

        this.go_list = new Array();
    }

    addGO(go){
        this.stage.addChild(go);
        this.go_list.push(go);
    }
    initGame(){
        this.canvas = document.getElementById("myCanvas");
        this.stage = new createjs.Stage("myCanvas");


        
        // more doc on addEventListener and other events you can listen to
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        this.canvas.addEventListener( "keyup", this.on_key_event.bind(this));
        this.canvas.addEventListener( "keydown", this.on_key_event.bind(this));
   
        createjs.Touch.enable(this.stage)
        this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, 10);

        this.checkForTouch();

        this.addGO(this.ball);
       
        this.go_list.forEach(function(element) { element.init()}.bind(this));

        createjs.Ticker.addEventListener("tick", this.run.bind(this));
        createjs.Ticker.framerate = 300;
    }

    checkForTouch(){
        // detection for touch
        let hasTouchScreen = false;

        if ("maxTouchPoints" in navigator){
            hasTouchScreen = navigator.maxTouchPoints > 0;
        }

        if(hasTouchScreen){
            this.initTouchControls();
        }
    }

    initTouchControls(){
        let leftButton = new Button(0, this.canvas.height*.8, this.canvas.width/2 * .9, this.canvas.height*.2);
        leftButton.addEventListener("mousedown", this.ball.on_left_down.bind(this.ball));
        leftButton.addEventListener("click", this.ball.on_left_up.bind(this.ball));
 
       
        let rightButton = new Button(this.canvas.width/2 * 1.1, this.canvas.height*.8, this.canvas.width/2 * .9, this.canvas.height*.2);
        rightButton.addEventListener("mousedown", this.ball.on_right_down.bind(this.ball));
        rightButton.addEventListener("click", this.ball.on_right_up.bind(this.ball));
    
        this.addGO(leftButton);
        this.addGO(rightButton);
    }

    focus(){
        //force focus on canvas object
        this.canvas.setAttribute('tabindex','0');
        this.canvas.focus();
    }

    run(event){
        
        const delta =  event.delta
        this.render();
        this.update(delta);
    }
    

    render(){
        //clear everything before we render
       this.stage.update();
    }
    
    update(delta){
        this.go_list.forEach(function(element) { element.update(delta)});
    }

    on_key_event(event){
        this.go_list.forEach(function(element) { element.process_event(event)});
    }
}