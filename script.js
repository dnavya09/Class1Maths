function drawAnimatedLine() {
    const canvas = document.getElementById('lineCanvas');
    const context = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 100;
    context.clearRect(0, 0, canvas.width, canvas.height);

    let startX = 50;
    let endX = 50;
    const startY = 50;
    const endY = 50;
    const speed = 2; // Speed of the line drawing

    function animateLine() {
        if (endX < 350) {
            endX += speed;
            context.beginPath();
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);
            context.stroke();
            requestAnimationFrame(animateLine);
        }
    }

    animateLine();
}

function drawAnimatedCircle() {
    const canvas = document.getElementById('circleCanvas');
    const context = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 400;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 100;
    let angle = 0;
    const speed = 0.05; // Speed of the circle drawing

    function animateCircle() {
        if (angle < 2 * Math.PI) {
            angle += speed;
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, angle);
            context.stroke();
            requestAnimationFrame(animateCircle);
        }
    }

    animateCircle();
}

// Interactive Drawing for Lines
const interactiveLineCanvas = document.getElementById('interactiveCanvas');
const interactiveLineContext = interactiveLineCanvas.getContext('2d');
interactiveLineCanvas.width = 400;
interactiveLineCanvas.height = 100;
let drawingLine = false;

interactiveLineCanvas.addEventListener('mousedown', startDrawingLine);
interactiveLineCanvas.addEventListener('mousemove', drawInteractiveLine);
interactiveLineCanvas.addEventListener('mouseup', stopDrawingLine);
interactiveLineCanvas.addEventListener('mouseout', stopDrawingLine);

function startDrawingLine(event) {
    drawingLine = true;
    interactiveLineContext.beginPath();
    interactiveLineContext.moveTo(event.offsetX, event.offsetY);
}

function drawInteractiveLine(event) {
    if (drawingLine) {
        interactiveLineContext.lineTo(event.offsetX, event.offsetY);
        interactiveLineContext.stroke();
    }
}

function stopDrawingLine() {
    drawingLine = false;
}

// Interactive Drawing for Circles
const interactiveCircleCanvas = document.getElementById('interactiveCircleCanvas');
const interactiveCircleContext = interactiveCircleCanvas.getContext('2d');
interactiveCircleCanvas.width = 400;
interactiveCircleCanvas.height = 400;
let drawingCircle = false;

interactiveCircleCanvas.addEventListener('mousedown', startDrawingCircle);
interactiveCircleCanvas.addEventListener('mousemove', drawInteractiveCircle);
interactiveCircleCanvas.addEventListener('mouseup', stopDrawingCircle);
interactiveCircleCanvas.addEventListener('mouseout', stopDrawingCircle);

function startDrawingCircle(event) {
    drawingCircle = true;
    interactiveCircleContext.beginPath();
    interactiveCircleContext.moveTo(event.offsetX, event.offsetY);
}

function drawInteractiveCircle(event) {
    if (drawingCircle) {
        interactiveCircleContext.lineTo(event.offsetX, event.offsetY);
        interactiveCircleContext.stroke();
    }
}

function stopDrawingCircle() {
    drawingCircle = false;
}

// Handle video object clicks
document.querySelectorAll('.video-object').forEach(video => {
    video.addEventListener('click', function() {
        const shape = this.dataset.shape;
        if (shape === 'long') {
            document.getElementById('longAudio').play();
        } else if (shape === 'round') {
            document.getElementById('roundAudio').play();
        }
    });
});
