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

document.querySelectorAll('.draggable').forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
});

document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);
});

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.dataset.shape);
    event.dataTransfer.setData('id', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const shape = event.dataTransfer.getData('text');
    const id = event.dataTransfer.getData('id');
    const targetContainer = event.target.id === 'roundContainer' ? 'round' : 'long';
    
    if (shape === targetContainer) {
        const element = document.getElementById(id);
        event.target.appendChild(element);
        element.draggable = false;
        element.style.opacity = '0.5';
    } else {
        alert('Oops! Wrong container. Try again.');
    }
}

document.querySelectorAll('.object-container').forEach(container => {
    container.addEventListener('click', () => {
        const shape = container.dataset.shape;
        const ticker = container.querySelector('.ticker');
        ticker.innerHTML = shape === 'round' ? '&#10004;' : '&#10008;';
        ticker.classList.add(shape === 'round' ? 'tick' : 'wrong-mark');
    });
});

function drawAnimatedLine() {
    const canvas = document.getElementById('lineCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ff5722';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    let x = 0;
    const interval = setInterval(() => {
        if (x < canvas.width) {
            x += 5;
            ctx.lineTo(x, canvas.height / 2);
            ctx.stroke();
        } else {
            clearInterval(interval);
        }
    }, 30);
}

function drawAnimatedCircle() {
    const canvas = document.getElementById('circleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#4caf50';
    ctx.lineWidth = 5;
    const radius = 80;
    let angle = 0;
    const interval = setInterval(() => {
        if (angle < 2 * Math.PI) {
            angle += 0.1;
            const x = canvas.width / 2 + radius * Math.cos(angle);
            const y = canvas.height / 2 + radius * Math.sin(angle);
            ctx.lineTo(x, y);
            ctx.stroke();
        } else {
            clearInterval(interval);
        }
    }, 30);
}





// Drag and Drop Functionality
const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

containers.forEach(container => {
    container.addEventListener('dragover', event => {
        event.preventDefault();
    });

    container.addEventListener('drop', event => {
        event.preventDefault();
        const draggingElement = document.querySelector('.dragging');
        if (draggingElement) {
            const shape = draggingElement.dataset.shape;
            if ((shape === 'round' && container.id === 'roundContainer') || 
                (shape === 'long' && container.id === 'longContainer')) {
                showTick(container);
                fixAndBlurObject(draggingElement, container);
            } else {
                showWrongMark(container);
                resetPosition(draggingElement);
            }
        }
    });
});

function showTick(container) {
    const tick = document.createElement('div');
    tick.classList.add('tick');
    tick.textContent = '✔';
    container.appendChild(tick);
    setTimeout(() => {
        container.removeChild(tick);
    }, 2000);
}

function fixAndBlurObject(object, container) {
    object.classList.add('fixed');
    object.setAttribute('draggable', 'false');
    container.appendChild(object);
}

function showWrongMark(container) {
    const wrongMark = document.createElement('div');
    wrongMark.classList.add('wrong-mark');
    wrongMark.textContent = '✖';
    container.appendChild(wrongMark);
    setTimeout(() => {
        container.removeChild(wrongMark);
    }, 2000);
}

function resetPosition(object) {
    const initialContainer = document.querySelector('.draggable-objects');
    initialContainer.appendChild(object);
}

document.querySelectorAll('.object-container').forEach(container => {
    container.addEventListener('click', () => {
        const shape = container.dataset.shape;
        const ticker = container.querySelector('.ticker');
        if (shape === 'round') {
            ticker.innerHTML = '✔';
            ticker.classList.add('tick');
            ticker.classList.remove('wrong-mark');
        } else {
            ticker.innerHTML = '✖';
            ticker.classList.add('wrong-mark');
            ticker.classList.remove('tick');
            setTimeout(() => {
                ticker.innerHTML = '';
            }, 2000);
        }
    });
});
const objects = [
    {
        image: 'download.png',
        classification: 'rolling',
        name: 'Ball'
    },
    {
        image: 'stick.png',
        classification: 'slipping',
        name: 'Stick'
    },
    {
        image: 'coin.png',
        classification: 'rolling',
        name: 'Wheel'
    },
    {
        image: 'pencil.png',
        classification: 'slipping',
        name: 'Box'
    }
];

function createTable() {
    const table = document.getElementById('object-table');
    objects.forEach((obj, index) => {
        const row = document.createElement('tr');
        
        const cell1 = document.createElement('td');
        const img = document.createElement('img');
        img.src = obj.image;
        img.alt = obj.name;
        img.style.width = '50px';
        img.style.height = '50px';
        cell1.appendChild(img);
        row.appendChild(cell1);
        
        const cell2 = document.createElement('td');
        const rollingInput = document.createElement('input');
        rollingInput.type = 'checkbox';
        rollingInput.id = `rolling-${index}`;
        cell2.appendChild(rollingInput);
        row.appendChild(cell2);
        
        const cell3 = document.createElement('td');
        const slippingInput = document.createElement('input');
        slippingInput.type = 'checkbox';
        slippingInput.id = `slipping-${index}`;
        cell3.appendChild(slippingInput);
        row.appendChild(cell3);
        
        table.appendChild(row);
    });
}

function checkAnswers() {
    let feedback = '';
    let allCorrect = true;
    
    objects.forEach((obj, index) => {
        const isRollingChecked = document.getElementById(`rolling-${index}`).checked;
        const isSlippingChecked = document.getElementById(`slipping-${index}`).checked;
        
        if ((obj.classification === 'rolling' && isRollingChecked && !isSlippingChecked) ||
            (obj.classification === 'slipping' && isSlippingChecked && !isRollingChecked)) {
            feedback += `<p>Correct for ${obj.name}!</p>`;
        } else {
            feedback += `<p>Wrong for ${obj.name}. It ${obj.classification}s.</p>`;
            allCorrect = false;
        }
    });
    
    if (allCorrect) {
        feedback = '<p>All answers are correct!</p>';
    }
    
    document.getElementById('feedback').innerHTML = feedback;
}

window.onload = createTable;
