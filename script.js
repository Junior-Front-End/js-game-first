const canvas = document.querySelector("#canvas1")
var ctx = canvas.getContext("2d")

var CANVAS_WIDTH = canvas.width = 500;
var CANVAS_HEIGHT = canvas.height = 1000;

var enemy1 = {
    x: 10,
    y: 50,
    width: 100,
    height: 200,
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    enemy1.x++;
    enemy1.y++;
    ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate)
}


animate()

