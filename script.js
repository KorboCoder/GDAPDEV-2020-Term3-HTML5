
let canvas = document.getElementById("myCanvas");
let stage = new createjs.Stage("myCanvas");
let x = 0;

let rect = new createjs.Shape();
rect.graphics.beginFill("#FF0000").drawRect(0,0,150,75);
rect.x = 0;
rect.y = 0;
stage.addChild(rect);

createjs.Ticker.addEventListener("tick", render);
createjs.Ticker.framerate = 300;

function render(){
    x += 1;
    rect.x = x;
    stage.update();

}

function on_key_event(event){
    console.log(event);
}

canvas.addEventListener("keyup", on_key_event);
canvas.addEventListener( "keydown", on_key_event);

 // hack to focus on canvas object
 function focus_on_canvas(){
    canvas.setAttribute('tabindex', '0');
    canvas.focus();
}
