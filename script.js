
let playerState = "run";
const dropdown = document.getElementById("anim")
dropdown.addEventListener("change", function(e){
    playerState = e.target.value
})

const canvas = document.querySelector("#canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image();
playerImage.src = 'shadow_dog.png'; 
const spriteWidth = 575
const spritHeight = 523
let frameX = 0
let frameY = 1


let gameFrame = 0
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [{
    name: "idle",
    frames: 7
}, {
    name: "jump",
    frames: 7
}, {
    name: "fall",
    frames: 9
}, {
    name: "run",
    frames: 9
}, {
    name: "dizzy",
    frames: 11
}, {
    name: "sit",
    frames: 5
}, {
    name: "roll",
    frames: 7
}, {
    name: "bite",
    frames: 7
}, {
    name: "ko",
    frames: 12
}, {
    name: "getHit",
    frames: 4
}];

animationStates.forEach((state, i) => {
    let frames = {loc: []};
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;        
        let positionY = i * spritHeight;      
        frames.loc.push({x: positionX, y: positionY});  
    }
    spriteAnimations[state.name] = frames;
});

console.log(animationStates);


//
function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spritHeight, 0 , 0, spriteWidth, spritHeight);

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




