function turnRed() {
    context.fillStyle = "red";
    context.fillRect(tileSize, 0, tileSize, tileSize);
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(tileSize, 0, tileSize, tileSize);
}

function turnGray() {
    context.fillStyle = "gray";
    context.fillRect(tileSize, 0, tileSize, tileSize);
    context.strokeStyle = 'black'; 
    context.lineWidth = 1; 
    context.strokeRect(tileSize, 0, tileSize, tileSize);    
}

function tileLoop() {
    for (x = 0; x < 5; x++) {
        context.fillStyle = "gray";
        context.fillRect(tileSize * x, 0, tileSize, tileSize);
    
        context.strokeStyle = 'black'; 
        context.lineWidth = 1; 
        context.strokeRect(tileSize * x, 0, tileSize, tileSize);
    }
}