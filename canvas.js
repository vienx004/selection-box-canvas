var body = document.getElementsByTagName('body')[0];
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var rect = {};

var isDrawing = false;

function init() {
    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener('mouseup', mouseUpListener);
    canvas.addEventListener('mousemove', handleMouseMove);
}


function handleMouseMove(event) {
    if(isDrawing === true) {
        rect.newX = event.x;
        rect.newY = event.y;

        rect.width = rect.newX - rect.x;
        rect.height = rect.newY - rect.y;

        c.clearRect(0, 0, canvas.width, canvas.height);
        draw(rect);
    }
}

function mouseDown(event) {
    rect.x = event.x;
    rect.y = event.y;
    isDrawing = true;
}

function mouseUpListener(event) {
    isDrawing = false;
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(rect) {
    c.fillStyle = 'yellow';
    c.globalAlpha = .4;
    c.setLineDash([6]);
    c.strokeRect(rect.x + 1, rect.y + 1, rect.width, rect.height);
    c.fillRect(rect.x, rect.y, rect.width, rect.height);
}

init();