let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.style.background = "#333";

context.fillStyle = "gray";

let tileSize;

let goofyAhhSquare = {
    x: undefined,
    y: 0,
    width: undefined,
    height: undefined,
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawCanvas();
}

// Event listener for window resize
window.addEventListener('resize', resizeCanvas);

let swindle = new Image();
swindle.src = "images/swindle.png";

function swindleLoad() {
    let x = tileSize;
    let y = 0;
    let width = tileSize;
    let height = tileSize;

    context.drawImage(swindle, x, y, tileSize, tileSize);
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(x, 0, tileSize, tileSize);  
}

canvas.addEventListener('mousemove', function(event) {
    let rectCanvas = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rectCanvas.left;
    let mouseY = event.clientY - rectCanvas.top;

    if (mouseX > goofyAhhSquare.x && mouseX < goofyAhhSquare.x + goofyAhhSquare.width &&
        mouseY > goofyAhhSquare.y && mouseY < goofyAhhSquare.y + goofyAhhSquare.height) {
        turnRed();
    }  else {
        turnGray();
        swindleLoad();
    }
})

swindle.onload = function() {
    drawCanvas();  // Only call drawCanvas once the image is loaded
};