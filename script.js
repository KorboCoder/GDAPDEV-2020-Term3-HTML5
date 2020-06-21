let x = 0;

function render(){
    x += 10;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, 0, 150, 75);
    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
