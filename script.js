let x = 0;

function render(){
    x += 1;
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    //clear everything before we render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, 0, 150, 75);
    window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
