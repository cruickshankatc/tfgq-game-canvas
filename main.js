let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.style.background = "#333";

context.fillStyle = "gray";

for (x = 0; x < 5; x++) {
    context.fillRect(50 * x, 0, 50, 50);

    context.strokeStyle = 'black'; // Set the border color to black
    context.lineWidth = 1; // Set the border width
    context.strokeRect(50 * x, 0, 50, 50);
}