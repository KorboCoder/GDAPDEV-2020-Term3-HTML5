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

        this.go_list.forEach(function(element) { element.init()}.bind(this));

        createjs.Ticker.addEventListener("tick", this.run.bind(this));
        createjs.Ticker.framerate = 300;
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