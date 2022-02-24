//<<<<<Create the variables needed and attach to HTML classes >>>//

//*Variables*//

//* Grid *//
const width = 14;
const height = 12;
const gridCellCount = width * height;
// * start game button
const start = document.getElementById('start');
const restart = document.getElementById('restart')
// *audio
const btns = document.querySelectorAll('button')
const audio = document.querySelector('audio')

// * score display
const scoreDisplay = document.querySelector('#score-display');
let score = 0;

const grid = document.querySelector('.grid');
// const ball = document.querySelector('.ball');
const cells = [];
const paddle = document.querySelectorAll('.paddle');
let paddlePosition = 145;

let discoPosition = 133;
let ballMovement;

//create the grid w/divs & grid classes
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const gameGrid = document.createElement('div');
    if (i <= 27) {
      gameGrid.className = 'purple'; //grid classes = .purple, .green, .yellow, .hidden, .paddle
    } else if (i >= 28 && i < 56) {
      gameGrid.className = 'green';
    } else if (i >= 56 && i < 70) {
      gameGrid.className = 'yellow';
    } else if (i >= 145 && i < 149) {
      gameGrid.className = 'paddle';
    }
    gameGrid.setAttribute('data-id', i);
    grid.appendChild(gameGrid);
    cells.push(gameGrid);
    // gameGrid.textContent = i;
  }
}
//!133 is taken up by the ball image and moved....need to fix asap
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

function handleKeys(event) {
  switch (
    event.keyCode // 4. assign key directions
  ) {
    case 39: //right arrow    // 5. move the bar with key func
      if (paddlePosition <= 150 - 1) {
        removePaddle(paddlePosition);
        paddlePosition++;
        addPaddle(paddlePosition + 3);
      }
      break;
    case 37: //left arrow
      if (paddlePosition >= 140 + 1) {
        removePaddle(paddlePosition + 3);
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
  // cells[discoPosition].classList.add('hidden');
  cells[discoPosition].classList.remove('ball');
}

//!make brick disappear when ball moves into location of brick

// When ball hits Yellow Brick --> remove yellow class, add hidden, return ball to paddle
function yellowCollision() {
  if (cells[discoPosition].classList.contains('yellow')) {
    return true;
  }
}

function handleYellowCollision() {
  cells[discoPosition].classList.remove('yellow');
  audio.src = './sounds/mixkit-game-balloon-or-bubble-pop-3069.wav'
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
  audio.src = './sounds/mixkit-body-punch-quick-hit-2153.wav'
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
  const topWall = discoPosition <= 13;
  return [leftWall, rightWall, topWall].some((val) => val);
};


function handleCollisionWithWall() {
  const leftWall = discoPosition % width === 0;
  const rightWall = discoPosition % width === width - 1;
  const topWall = discoPosition <= 13;
  const paddle = cells[discoPosition].classList.contains('paddle')
  const goingUp = direction.slice(direction.length - 2) === 'up';
  console.log({ direction, leftWall, rightWall, topWall, goingUp, paddle });
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
    const isGoingLeft = direction.slice(4) === 'left';
    if (isGoingLeft) {
      direction = 'leftdown';
    } else {
      direction = 'rightdown';
    }
  } else if (paddle) {
    const goingDown = direction.slice(direction.length - 4) === 'down';
    if (goingDown) {
      direction = 'rightup';
    } else { 
      direction = 'leftup';
    }
  }
  console.log('hit wall', direction, paddle,)
}

function changeDiscoDirection() {
  if (direction === 'rightup') {
    direction = 'rightdown';
  }
  if (direction === 'leftup') {
    direction = 'leftdown';
  }
  console.log(direction)
}

function changeDiscoDirectionTwo() {
  if (direction === 'leftdown') {
    direction = 'leftup';
  } else if (direction === 'rightdown') {
    direction = 'rightup';
  }
  console.log(direction)
}

const updateDiscoPosition = () => {
  if (direction === 'leftup') {
    discoPosition = discoPosition - 15;
  } else if (direction === 'leftdown') {
    discoPosition = discoPosition + 13;
  } else if (direction === 'rightup') {
    discoPosition = discoPosition - 13;
  } else if (direction === 'rightdown') {
    discoPosition = discoPosition + 15;
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
      // removeDisco()
      changeDiscoDirectionTwo();
      // addDisco()
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

    if (discoPosition > 153) {
      scoreDisplay.innerHTML = 'Game Over!'
      // audio.src = './sounds/mixkit-retro-game-over-1947.wav'
      // audio.play();
      clearInterval(ballMovement);
      
    }
  }, 200);
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
// btns.forEach((btn) => btn.addEventListener('click', playSound));

// function playSound() {
//   audio.src = './sounds/mixkit-retro-game-notification-212.wav'
//   audio.play();
// }
//event listner for spacebar
// cells.forEach((cell) => cell.addEventListener(hasDisco, hitYellow));
// make brick disappear when ball moves into location of brick

// make ball move to bottom after ball moves into location of brick

//if bar misses ball, turn over, ball returns to start position

//assign pts to cell position of bricks

// 10. score pts when ball hits brick cell position
//     - pts determined by location of brick
//     -pts tallied on scoreboard