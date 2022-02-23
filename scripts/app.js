//<<<<<Create the variables needed and attach to HTML classes >>>//

//*Variables needed*//: 


// * width
const width = 14
// const gridWidth = 1500;
// const brickWidth = 105;
// const paddleWidth = 420;
//*height
const height = 11;
// * cell count
const gridCellCount = width * height;
// * start game button
const start = document.getElementById('start');
// *audio

// * score display
// const scoreDisplay = document.querySelector('#score-display');
// * score tally
// const yellow = 1
// const green = 3
// const purple = 5

let score = 0;
// * x =
// const xPosition = currentIndex % width;
// * y =
// const yPosition = Math.floor(currentIndex / width);
//*ball position 
// let ballPosition = 133



const grid = document.querySelector('.grid');
const ball = document.querySelector('.ball');
const cells = [];
const paddle = document.querySelectorAll('.paddle');
let paddlePosition = 145

let discoPosition = 133



//create the grid w/divs & grid classes 
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const gameGrid = document.createElement('div');
    if (i <= 27) {
      gameGrid.className = 'purple';   //grid classes = .purple, .green, .yellow, .hidden, .paddle
    } else if  (i >= 28 && i < 56) {
      gameGrid.className = 'green';
    } else if (i >= 56 && i < 70) {
      gameGrid.className = 'yellow';
    } else if (i >= 145 && i < 149) { 
      gameGrid.className = 'paddle';
    } else {
      gameGrid.className = 'hidden';
    }
    gameGrid.setAttribute('data-id', i);
    grid.appendChild(gameGrid);
    cells.push(gameGrid);
    gameGrid.textContent = i 
  }
}
//!133 is taken up by the ball image and moved....need to fix asap
function addBall() {
  cells[discoPosition].classList.add('ball');
}

createGrid()
addBall()


function addPaddle(position) {
  cells[position].classList.remove('hidden');
  cells[position].classList.add('paddle');
  console.log('add function works');
}
function removePaddle(position) {
  cells[position].classList.add('hidden');
  cells[position].classList.remove('paddle');
  console.log('remove function works');
}


function handleKeys(event) {

  switch (event.keyCode) {    // 4. assign key directions
    case 39: //right arrow    // 5. move the bar with key func
      if (paddlePosition <= 150 - 1) {
        removePaddle(paddlePosition)
        paddlePosition++
        addPaddle(paddlePosition + 3)
        console.log(paddlePosition)  // 6. make sure it works
      }
      break
    case 37: //left arrow
      if (paddlePosition >= 140 + 1) {
        removePaddle(paddlePosition + 3) 
        paddlePosition --
        addPaddle(paddlePosition)
        console.log(paddlePosition)
      }
      break
    default: 
      console.log('invalid key do nothing')
  }
  
}
// console.log(cells)


document.addEventListener('keyup', handleKeys)


//!<<<<<<<<<<<functions to move the ball>>>>>>>>>>>>>//
let onLeftPaddle = [145, 146]
let onRightPaddle = [147, 148]
let onPaddle = true
let onYellowBrick = true
let onGreenBrick = true
let onPurpleBrick = true
let direction = 'rightup' 




function addDisco() {
  cells[discoPosition].classList.remove('hidden');
  cells[discoPosition].classList.add('ball');
  console.log('added disco ball');
}

function removeDisco() {
  cells[discoPosition].classList.add('hidden');
  cells[discoPosition].classList.remove('ball');
  console.log('removed disco ball');
}

//!make brick disappear when ball moves into location of brick

// When ball hits Yellow Brick --> remove yellow class, add hidden, return ball to paddle 
function yellowCollision() {
  cells[discoPosition].classList.remove('yellow');
  cells[discoPosition].classList.add('hidden');
  console.log('it works')
  // cells[discoPosition].includes.classList('yellow');
}

// When ball hits Green Brick --> remove green class, add hidden, return ball to paddle
function greenCollision() {
  cells[discoPosition].classList.remove('green'); 
  cells[discoPosition].classList.add('hidden');
}
// When ball hits Purple Brick --> remove purple class, add hidden, return ball to paddle
function purpleCollision() {
  cells[discoPosition].classList.remove('purple');
  cells[discoPosition].classList.add('hidden');
}

function hitBrickMoveDown() {
  cells[discoPosition].includesClassList('green')
  discoPosition += 13
}

function walls() {
  const leftEdge = discoPosition[0] % width === 0
  const rightEdge = discoPosition[discoPosition.length - 1] % width === width - 1
  const topEdge = discoPosition >= 13

}

// function discoDirection() {
//   if (direction === 'leftup') {
//     discoPosition -= 13
//   } else if (direction === 'leftdown') {
//     discoPosition += 13
//   } else if (direction === 'rightup') {
//     discoPosition -= 15
//   } else if (direction === 'rightdown') {
//     discoPosition += 15
//   }
// }
// console.log(direction)


function moveDiscoBall() {
  const ballMovement = setInterval(() => {
    if (onPaddle) {
      removeDisco()
      discoPosition -= 13
      yellowCollision()
      if (yellowCollision) {
        removeDisco()
        direction = 'leftdown'
      }
      // greenCollision()
      // purpleCollision()
      // hitBrickMoveDown()
      if (onYellowBrick) {
        if (direction === 'leftup') {
          direction = 'leftdown';
        } else if (direction === 'rightup') {
          direction = 'rightdown';
        }
        if (onLeftPaddle) {
          direction === 'leftup';
        } else {
          direction === 'rightup';
        }
      }
      // greenCollision()
      // yellowCollision()
      // hitBrickMoveDown(direction)
      // discoPosition += 13
      removeDisco()
      // if (direction === 'leftup') {
      //   discoPosition -= 13
      // } else if (direction === 'leftdown') {
      //   discoPosition += 13
      // } else if (direction === 'rightup') {
      //   discoPosition -= 15
      // } else if (direction === 'rightdown') {
      //   discoPosition += 15
      // }
      addDisco()
    } else { 
      clearInterval(ballMovement)
    } 
  }, 1000)
}

//<<<<<<<<Event Listner for mouseClick on StartGame button>>>>>//
// start.addEventListener('click', moveDiscoBall)
//event listner for spacebar
document.addEventListener('keydown', moveDiscoBall) 



// make brick disappear when ball moves into location of brick

// make ball move to bottom after ball moves into location of brick


//if bar misses ball, turn over, ball returns to start position


//assign pts to cell position of bricks


// 10. score pts when ball hits brick cell position
//     - pts determined by location of brick
//     -pts tallied on scoreboard