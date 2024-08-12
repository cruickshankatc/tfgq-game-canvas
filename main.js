let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.style.background = "#333";

context.fillStyle = "gray";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Redraw or reposition your game elements based on the new dimensions

}

// Initial resize
resizeCanvas();

// Event listener for window resize
window.addEventListener('resize', resizeCanvas);

let goofyAhhSquare = {
    x: 50,
    y: 0,
    width: 50,
    height: 50,
}

for (x = 0; x < 5; x++) {
    context.fillRect(50 * x, 0, 50, 50);

    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(50 * x, 0, 50, 50);
}

function turnRed() {
    context.fillStyle = "red";
    context.fillRect(50, 0, 50, 50);
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(50, 0, 50, 50);
}

function turnGray() {
    context.fillStyle = "gray";
    context.fillRect(50, 0, 50, 50);
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(50, 0, 50, 50);    
}

let swindle = new Image();

swindle.src = "images/swindle.png";

swindle.onload = function() {
    let x = 100;
    let y = 0;
    let width = canvas.width/50;
    let height = canvas.width/50;

    context.drawImage(swindle, x, y, width, height);
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(x, 0, 50, 50);  
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
    }
})