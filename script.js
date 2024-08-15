console.log("Hello im running")
var currentActivityIndex = 0;
      const activities = document.querySelectorAll('.activity');
      console.log(activities);
  
      function updateActivity() {
          activities.forEach((activity, index) => {
              if (index === currentActivityIndex) {
                  activity.classList.add('active');
              } else {
                  activity.classList.remove('active');
              }
          });
      }
      
      function showNextActivity() {
          if (currentActivityIndex < activities.length - 1) {  // Corrected boundary condition
              currentActivityIndex++;
              console.log(currentActivityIndex) // Move to the next activity
              updateActivity();
          } else {
              console.log("No more activities.");
          }
      }
  
      function showPreviousActivity() {
          if (currentActivityIndex > 0) {  // Add previous functionality
              currentActivityIndex--; // Move to the previous activity
              updateActivity();
          } else {
              console.log("Already at the first activity.");
          }
      }
  
    //   document.querySelector('.btn-next').addEventListener('click', () => {
    //       console.log("Next button clicked"); // Debugging
    //       showNextActivity();
    //   });
  
    //   document.querySelector('.btn-back').addEventListener('click', () => {
    //       console.log("Back button clicked"); // Debugging
    //       showPreviousActivity();
    //   });
      updateActivity();
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

// // Handle video object clicks
// document.querySelectorAll('.video-object').forEach(video => {
//     video.addEventListener('click', function() {
//         const shape = this.dataset.shape;
//         if (shape === 'long') {
//             document.getElementById('longAudio').play();
//         } else if (shape === 'round') {
//             document.getElementById('roundAudio').play();
//         }
//     });
// });

// document.querySelectorAll('.draggable').forEach(draggable => {
//     draggable.addEventListener('dragstart', dragStart);
// });

// document.querySelectorAll('.dragcont').forEach(container => {
//     container.addEventListener('dragover', dragOver);
//     container.addEventListener('drop', drop);
// });

// function dragStart(event) {
//     event.dataTransfer.setData('text', event.target.dataset.shape);
//     event.dataTransfer.setData('id', event.target.id);
// }

// function dragOver(event) {
//     event.preventDefault();
// }

// function drop(event) {
//     event.preventDefault();
//     const shape = event.dataTransfer.getData('text');
//     const id = event.dataTransfer.getData('id');
//     const targetContainer = event.target.id === 'roundContainer' ? 'round' : 'long';
    
//     if (shape === targetContainer) {
//         const element = document.getElementById(id);
//         event.target.appendChild(element);
//         element.draggable = false;
//         element.style.opacity = '0.5';
//     } else {
//         alert('Oops! Wrong container. Try again.');
//     }
// }

// document.querySelectorAll('.object-container').forEach(container => {
//     container.addEventListener('click', () => {
//         const shape = container.dataset.shape;
//         const ticker = container.querySelector('.ticker');
//         ticker.innerHTML = shape === 'round' ? '&#10004;' : '&#10008;';
//         ticker.classList.add(shape === 'round' ? 'tick' : 'wrong-mark');
//     });
// });

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
const containers = document.querySelectorAll('.dragcont');
const clapSound = document.getElementById('clapSound');

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
                checkCompletion();
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


function checkCompletion() {
    const roundItems = document.querySelectorAll('#roundContainer .draggable');
    const longItems = document.querySelectorAll('#longContainer .draggable');
    const totalItems = draggables.length;

    // Check if the number of fixed items in each container matches the expected number
    if (roundItems.length + longItems.length === totalItems) {
        playClapSoundForDuration(5000); // Play clapping sound for 5 seconds
    }
}

function playClapSoundForDuration(duration) {
    clapSound.play();
    setTimeout(() => {
        clapSound.pause(); // Stop the sound after the specified duration
        clapSound.currentTime = 0; // Reset the sound to the start
    }, duration);
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

// document.querySelectorAll('.object-container').forEach(container => {
//     container.addEventListener('click', () => {
//         const shape = container.dataset.shape;
//         const ticker = container.querySelector('.ticker');
//         if (shape === 'round') {
//             ticker.innerHTML = '✔';
//             ticker.classList.add('tick');
//             ticker.classList.remove('wrong-mark');
//         } else {
//             ticker.innerHTML = '✖';
//             ticker.classList.add('wrong-mark');
//             ticker.classList.remove('tick');
//             setTimeout(() => {
//                 ticker.innerHTML = '';
//             }, 2000);
//         }
//     });
// });


const objectContainers = document.querySelectorAll('.object-container');
const applauseSound = document.getElementById('cartoonSound');

// Count the number of round objects that need to be correctly identified
const totalRoundObjects = document.querySelectorAll('.object-container[data-shape="round"]').length;
let correctSelections = 0; // Counter for correct selections

objectContainers.forEach(container => {
    container.addEventListener('click', () => {
        const shape = container.dataset.shape;
        const ticker = container.querySelector('.ticker');

        if (shape === 'round') {
            if (!ticker.classList.contains('tick')) { // Ensure the tick is not added again
                ticker.innerHTML = '✔';
                ticker.classList.add('tick');
                ticker.classList.remove('wrong-mark');
                correctSelections += 1; // Increment correct selections counter
                checkComp(); // Check if all round objects are selected
            }
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

function checkComp() {
    // Play clapping sound if all round objects have been correctly identified
    if (correctSelections === totalRoundObjects) {
        playApplauseSoundForDuration(3000); // Play applause sound for 5 seconds
    }
}

function playApplauseSoundForDuration(duration) {
    applauseSound.play();
    setTimeout(() => {
        applauseSound.pause(); // Stop the sound after the specified duration
        applauseSound.currentTime = 0; // Reset the sound to the start
    }, duration);
}

// // Drag and Drop Functionality
// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         draggable.classList.add('dragging');
//     });

//     draggable.addEventListener('dragend', () => {
//         draggable.classList.remove('dragging');
//     });
// });

// containers.forEach(container => {
//     container.addEventListener('dragover', event => {
//         event.preventDefault();
//     });

//     container.addEventListener('drop', event => {
//         event.preventDefault();
//         const draggingElement = document.querySelector('.dragging');
//         if (draggingElement) {
//             const shape = draggingElement.dataset.shape;
//             if ((shape === 'round' && container.id === 'roundContainer') || 
//                 (shape === 'long' && container.id === 'longContainer')) {
//                 showTick(container);
//                 fixAndBlurObject(draggingElement, container);
//             } else {
//                 showWrongMark(container);
//                 resetPosition(draggingElement);
//             }
//         }
//     });
// });

// function showTick(container) {
//     const tick = document.createElement('div');
//     tick.classList.add('tick');
//     tick.textContent = '✔';
//     container.appendChild(tick);
//     setTimeout(() => {
//         container.removeChild(tick);
//     }, 2000);
// }

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
function playYipeeSound() {
    const successSound = document.getElementById('yipeeSound');
    successSound.currentTime = 0; // Reset to start
    successSound.play();

    // Stop the sound after 3 seconds
    setTimeout(() => {
        successSound.pause();
    }, 5000);
}
function checkAnswers() {
    let feedback = '';
    let allCorrect = true;

    const objectNamesKannada = {
        'Ball': 'ಚೆಂಡು',
        'Stick': 'ಕೋಲು',
        'Wheel': 'ಚಕ್ರ',
        'Box': 'ಪೆಟ್ಟಿಗೆ',
        // Add more objects and their Kannada translations as needed
    };

    objects.forEach((obj, index) => {
        const isRollingChecked = document.getElementById(`rolling-${index}`).checked;
        const isSlippingChecked = document.getElementById(`slipping-${index}`).checked;

        const classificationKannada = obj.classification === 'rolling' ? 'ಉರುಳುತ್ತ' : 'ಜಾರುತ್ತ'; // "rolling" -> "ಗುಂಡು", "slipping" -> "ಜಾರಿ"
        const objNameKannada = objectNamesKannada[obj.name] || obj.name; // Use Kannada name or fallback to the original name

        if ((obj.classification === 'rolling' && isRollingChecked && !isSlippingChecked) ||
            (obj.classification === 'slipping' && isSlippingChecked && !isRollingChecked)) {
            feedback += `<p>${objNameKannada} ಗೆ ಸರಿಯಾಗಿದೆ!</p>`;  // "is correct!"
        } else {
            feedback += `<p>${objNameKannada} ಗೆ ತಪ್ಪಾಗಿದೆ. ಇದು ${classificationKannada}ದೆ.</p>`;  // "is incorrect. It is rolling/slipping."
            allCorrect = false;
        }
    });

    if (allCorrect) {
        feedback = '<p>ಎಲ್ಲಾ ಉತ್ತರಗಳು ಸರಿಯಾಗಿವೆ!</p>';  // "All answers are correct!"
        playYipeeSound();
    }

    document.getElementById('feedback').innerHTML = feedback;
}

function handleBallClick() {
    const ballSound = document.getElementById('ball-sound');
    const ballImg = document.querySelector('.football');
    
    ballSound.play();
    ballImg.classList.add('bounce');
    
    // Remove bounce effect after animation ends
    ballImg.addEventListener('animationend', () => {
        ballImg.classList.remove('bounce');
    }, { once: true });
}

function handleCoinsClick() {
    const coinsSound = document.getElementById('coins-sound');
    const coinsImg = document.querySelector('.coins');
    coinsImg.classList.add('highlight-gray');
    coinsSound.play();
    
    // Remove highlight after sound ends
    coinsSound.addEventListener('ended', () => {
        coinsImg.classList.remove('highlight-gray');
    });
}

function handleClocksClick() {
    const clocksSound = document.getElementById('clocks-sound');
    clocksSound.play();
}

function handleWheelsClick() {
    const wheelsSound = document.getElementById('wheels-sound');
    const wheelsImg = document.querySelector('.wheels');
    
    
    wheelsSound.play();
    wheelsImg.classList.add('rolls');
    // Remove roll effect after animation ends
    wheelsImg.addEventListener('animationend', () => {
        wheelsImg.classList.remove('roll');
    }, { once: true });
}



function handleSunsClick() {
    const sunsSound = document.getElementById('suns-sound');
    const sunsImg = document.querySelector('.suns');
    
    sunsSound.play();
    sunsImg.classList.add('pop-up');
    // Remove highlight after sound ends
    sunsSound.addEventListener('ended', () => {
        sunsImg.classList.remove('highlight-orange');
    });
}

function handleMoonsClick() {
    const moonsSound = document.getElementById('moons-sound');
    const moonsImg = document.querySelector('.moons');
    
    moonsSound.play();
    moonsImg.classList.add('pop-up');
    
    // Remove highlight after sound ends
    moonsSound.addEventListener('ended', () => {
        moonsImg.classList.remove('highlight-greyish-white');
    });
}


function handlePencilClick() {
    const pencilSound = document.getElementById('pencil-sound');
    const pencilImg = document.querySelector('.pencil');
    
    pencilSound.play();
    pencilImg.classList.add('dance');
    
    pencilImg.addEventListener('animationend', () => {
        pencilImg.classList.remove('dance');
    }, { once: true });
}

function handleLadderClick() {
    const ladderSound = document.getElementById('ladder-sound');
    const ladderImg = document.querySelector('.ladder');
    
    ladderSound.play();
    ladderImg.classList.add('pop-up');
    
    ladderImg.addEventListener('animationend', () => {
        ladderImg.classList.remove('pop-up');
    }, { once: true });
}

function handleBottleClick() {
    const bottleSound = document.getElementById('bottle-sound');
    const bottleImg = document.querySelector('.bottle');
    
    bottleSound.play();
    bottleImg.classList.add('spray');
    
    bottleImg.addEventListener('animationend', () => {
        bottleImg.classList.remove('spray');
    }, { once: true });
}

function handleCandleClick() {
    const candleSound = document.getElementById('candle-sound');
    const candleImg = document.querySelector('.candle');
    
    candleSound.play();
    candleImg.classList.add('wobble');
    
    candleImg.addEventListener('animationend', () => {
        candleImg.classList.remove('wobble');
    }, { once: true });
}

// WHEEL ROLLING

let isRolling = false;
const wheel = document.querySelector('.wheel');
const button = document.querySelector('.btn');

function startAnimation() {
    wheel.classList.add('rolling');
    wheel.addEventListener('animationend', resetPosition);
}

function stopAnimation() {
    wheel.classList.remove('rolling');
    wheel.removeEventListener('animationend', resetPosition);
}

function resetPosition() {
    wheel.classList.remove('rolling');
    void wheel.offsetWidth; // Trigger reflow
    wheel.classList.add('rolling');
}

function toggleAnimation() {
    if (isRolling) {
        stopAnimation();
        button.textContent = 'ಅನಿಮೇಷನ್ ಪ್ರಾರಂಭಿಸಿ';
    } else {
        startAnimation();
        button.textContent = 'ಅನಿಮೇಷನ್ ನಿಲ್ಲಿಸಿ';
    }
    isRolling = !isRolling;
}

let isSliding = false;
const stick = document.querySelector('.stick');
const btn2 = document.querySelector('.btn2');

function startAnim() {
    stick.classList.add('sliding');
    stick.addEventListener('animationend', resetPos);
}

function stopAnim() {
    stick.classList.remove('sliding');
    stick.removeEventListener('animationend', resetPos);
}

function resetPos() {
    stick.classList.remove('sliding');
    void stick.offsetWidth; // Trigger reflow
    stick.classList.add('sliding');
}

function toggleAnim() {
    if (isSliding) {
        stopAnim();
        btn2.textContent = 'ಅನಿಮೇಷನ್ ಪ್ರಾರಂಭಿಸಿ';
    } else {
        startAnim();
        btn2.textContent = 'ಅನಿಮೇಷನ್ ನಿಲ್ಲಿಸಿ';
    }
    isSliding = !isSliding;
}

function playAudio(id) {
    var audio = document.getElementById(id);
    audio.play();
  }

window.onload = createTable;
