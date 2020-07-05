
let canvas = document.getElementById("myCanvas");
let stage = new createjs.Stage("myCanvas");
let x = 0;


let bg_img = new Image();
bg_img.src = "./bg_grass.png"

let bitmap = new createjs.Bitmap(bg_img);
stage.addChild(bitmap);

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

function focus_on_canvas(){
    // hack to focus on canvas object
    canvas.setAttribute('tabindex','0');
    canvas.focus();
}

function init_sound(json){
    createjs.Sound.initializeDefaultPlugins();
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSounds([json], "./");
}

fetch("./output.json")
.then(response => response.json())
.then(init_sound);

function playSound(key){
    createjs.Sound.play(key);
}
