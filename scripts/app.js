//<<<<<Create the variables needed and attach to HTML classes >>>//

//*Variables*//

// * Grid * //
const width = 13;
const height = 13;
const gridCellCount = width * height;
const grid = document.querySelector('.grid');
const cells = [];
// * start/restart game buttons * //
const start = document.getElementById('start');
const restart = document.getElementById('restart')
// * audio * //
const btns = document.querySelectorAll('button')
const audio = document.querySelector('audio')

// * score display * //
const scoreDisplay = document.querySelector('#score-display');
let score = 0;

// * Disco/Paddle starting positions * //
let paddlePosition = 135;
let discoPosition = 124;
let ballMovement;

//create the grid w/divs & grid classes
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const gameGrid = document.createElement('div');
    if (i <= 25) {
      gameGrid.className = 'purple'; //grid classes = .purple, .green, .yellow, .hidden, .paddle
    } else if (i >= 26 && i < 52) {
      gameGrid.className = 'green';
    } else if (i >= 52 && i < 65) {
      gameGrid.className = 'yellow';
    } else if (i >= 135 && i < 138) {
      gameGrid.className = 'paddle';
    }
    gameGrid.setAttribute('data-id', i);
    grid.appendChild(gameGrid);
    cells.push(gameGrid);
    // gameGrid.textContent = i;
  }
}

function addDisco() {
  cells[discoPosition].classList.add('ball');
}

createGrid();
addDisco();


function addPaddle(position) {
  cells[position].classList.add('paddle');
}
function removePaddle(position) {
  cells[position].classList.remove('paddle');
}

//*Functions for paddle movement and quit game*//
function handleKeys(event) {
  switch (
    event.keyCode // 4. assign key directions
  ) {
    case 39: //right arrow    // 5. move the bar with key func
      if (paddlePosition <= 142 - 3) {
        removePaddle(paddlePosition);
        paddlePosition++;
        addPaddle(paddlePosition + 2);
      }
      break;
    case 37: //left arrow
      if (paddlePosition >= 130 + 1) {
        removePaddle(paddlePosition + 2);
        paddlePosition--;
        addPaddle(paddlePosition);
      }
      break;
    case 81:
      stopGame();
      break;
    default:
      console.log('invalid key do nothing');
  }
}

document.addEventListener('keydown', handleKeys);

//!<<<<<<<<<<<functions to move the ball>>>>>>>>>>>>>//

let direction = 'leftup';

function removeDisco() {
  cells[discoPosition].classList.remove('ball');
}
//make brick disappear when ball moves into location of brick

// When ball hits Yellow Brick --> remove yellow class, add hidden, return ball to paddle
function yellowCollision() {
  if (cells[discoPosition].classList.contains('yellow')) {
    return true;
  }
}

function handleYellowCollision() {
  cells[discoPosition].classList.remove('yellow');
  audio.src = './sounds/mixkit-body-punch-quick-hit-2153.wav'
  audio.play();
}

// When ball hits Green Brick --> remove green class, add hidden, return ball to paddle
function greenCollision() {
  if (cells[discoPosition].classList.contains('green')) {
    return true;
  }
}

function handleGreenCollision() {
  cells[discoPosition].classList.remove('green');
  audio.src = './sounds/mixkit-electronic-retro-block-hit-2185.wav'
  audio.play();
}
// When ball hits Purple Brick --> remove purple class, add hidden, return ball to paddle
function purpleCollision() {
  if (cells[discoPosition].classList.contains('purple')) {
    return true;
  }
}

function handlePurpleCollision() {
  cells[discoPosition].classList.remove('purple');
  audio.src = './sounds/mixkit-electronic-retro-block-hit-2185.wav'
  audio.play();
}

function paddleCollision() {
  if (cells[discoPosition].classList.contains('paddle')) {
    console.log('contains paddle')
    return true;
  }
}

const isCollisionWithWall = () => {
  const leftWall = discoPosition % width === 0;
  const rightWall = discoPosition % width === width - 1;
  const topWall = discoPosition <= width;
  return [leftWall, rightWall, topWall].some((val) => val);
};


function handleCollisionWithWall() {
  const leftWall = discoPosition % width === 0;
  const rightWall = discoPosition % width === width - 1;
  const topWall = discoPosition <= width;
  const paddle = cells[discoPosition].classList.contains('paddle')
  const goingUp = direction.slice(direction.length - 2) === 'up';
  const isGoingLeft = direction.slice(4) === 'left';
  const goingDown = direction.slice(direction.length - 4) === 'down';
  // console.log({ direction, leftWall, rightWall, topWall, goingUp, paddle });
  if (leftWall) {
    if (goingUp) {
      direction = 'rightup';
    } else {
      direction = 'rightdown';
    }
  } else if (rightWall) {
    if (goingUp) {
      direction = 'leftup';
    } else {
      direction = 'leftdown';
    }
  } else if (topWall) {
    if (isGoingLeft) {
      direction = 'rightdown';
    } else {
      direction = 'leftdown';
    }
  } else if (paddle) {
    if (goingDown) {
      direction = 'rightup';
    } else { 
      direction = 'leftup';
    }
  }
}

function changeDiscoDirection() {
  if (direction === 'rightup') {
    direction = 'rightdown';
  }
  if (direction === 'leftup') {
    direction = 'leftdown';
  }
}
//direction ball goes when it hits the paddle//
function changeDiscoPaddleDirection() {
  if (direction === 'leftdown') {
    direction = 'leftup';
  } else if (direction === 'rightdown') {
    direction = 'rightup';
  }
}

const updateDiscoPosition = () => {
  if (direction === 'leftup') {
    discoPosition = discoPosition - 13;
  } else if (direction === 'leftdown') {
    discoPosition = discoPosition + 12;
  } else if (direction === 'rightup') {
    discoPosition = discoPosition - 12;
  } else if (direction === 'rightdown') {
    discoPosition = discoPosition + 14;
  }
};



function moveDiscoBall() {
  ballMovement = setInterval(() => {
    if (yellowCollision()) {
      changeDiscoDirection();
      handleYellowCollision();
      score = score + 1
      scoreDisplay.innerHTML = score
    }

    if (greenCollision()) {
      changeDiscoDirection();
      handleGreenCollision();
      score = score + 3
      scoreDisplay.innerHTML = score
    }

    if (purpleCollision()) {
      changeDiscoDirection();
      handlePurpleCollision();
      score = score + 5
      scoreDisplay.innerHTML = score
    }

    if (paddleCollision()) {
      changeDiscoPaddleDirection();
    }

    removeDisco();

    updateDiscoPosition();

    if (isCollisionWithWall()) {
      handleCollisionWithWall();
    }

    addDisco();

    if (score >= 238) {
      scoreDisplay.innerHTML = 'You Win!'
      clearInterval(ballMovement);
    }

    if (discoPosition > 142) {
      scoreDisplay.innerHTML = 'Game Over!'
      audio.src = './sounds/mixkit-retro-game-over-1947.wav'
      audio.play();
      removeDisco();
      clearInterval(ballMovement);
      
    }
  }, 250);
}
function restartGame() {
  window.location.reload()
}

function stopGame() {
  console.log('stopping game');
  clearInterval(ballMovement);
}

//<<<<<<<<Event Listner for mouseClick on StartGame button>>>>>//
start.addEventListener('click', moveDiscoBall);
restart.addEventListener('click', restartGame);


//when each button is clicked, execute a function
btns.forEach((btn) => btn.addEventListener('click', playSound));

function playSound() {
  audio.src = './sounds/mixkit-retro-game-notification-212.wav'
  audio.play();
}