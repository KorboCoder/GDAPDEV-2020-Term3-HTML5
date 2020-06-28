let x = 0;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function render(){
    x += 1;

    //clear everything before we render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, 0, 150, 75);
    window.requestAnimationFrame(render);
}

function on_key_event(event){
    console.log(event);
}

canvas.addEventListener("keyup", on_key_event);
canvas.addEventListener( "keydown", on_key_event);

// hack to focus on canvas object
canvas.setAttribute('tabindex','0');
canvas.focus();

window.requestAnimationFrame(render);

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