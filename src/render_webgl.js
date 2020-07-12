function render(){
    let canvas = document.getElementById('myCanvas');
    let gl = canvas.getContext('webgl');
    gl.clearColor(0.9,0.9,0.8,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = render