function drawCanvas() {
    tileSize = canvas.width/30;

    goofyAhhSquare.x = tileSize;
    goofyAhhSquare.width = tileSize;
    goofyAhhSquare.height = tileSize;

    
    tileLoop();
    
    swindleLoad();
}