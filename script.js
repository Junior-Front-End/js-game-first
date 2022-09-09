const canvas = document.querySelector("#canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image();
playerImage.src = 'shadow_dog.png'; 
const spriteWidth = 575
const spritHeight = 523
let frameX = 0
let frameY = 5
let gameFrame = 0
const staggerFrames = 5


//
function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //
    //
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spritHeight, spriteWidth, spritHeight, 0 , 0, spriteWidth, spritHeight);

    if (gameFrame % staggerFrames == 0) {
        if(frameX < 4) frameX++;
        else frameX = 0; 
    }

    gameFrame++;

    //
    requestAnimationFrame(animate);

};


//
animate();




