var can = document.getElementById("canvas");
var ctx = can.getContext("2d");
var mouse = {
    x: null,
    y: null
}
function fun(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY - can.offsetTop/2;
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(mouse.x,mouse.y,50,0,Math.PI * 2)
    console.log(mouse)
    ctx.stroke();
}
can.addEventListener("mousemove",fun);