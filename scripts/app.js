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

let ballPosition = 133



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
    // } else if (i === 133) {
    //   gameGrid.classList = 'ball';
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
  cells[ballPosition].classList.add('ball');
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

// 7. create div and attach img of ball to cell position


// const ball = document.querySelector('.ball');
// const currentIndex = 'ball';
// let ballPosition = currentIndex % width
// ball.classList.add('ball')
// ball.style.left = ballPosition[0] + 'px'
// ball.style.bottom = ballPosition[1] + 'px'
// grid.appendChild(ball)

// console.log(ball)

// let discoBall = document.querySelector('.Disco-Ball');
// const discoDimensions = discoBall.getBoundingClientRect()
// console.log(discoDimensions)

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

//!change to reflect ball image not invisible discoball -move by i # through set interval function not x/y axis pts
//move ball 
// let xPosition = 580
// let yPosition = 615.5
let discoPosition = (133)

function moveDiscoBall() {
  const ballMovement = setInterval(() => {
    if (true) {
      removeDisco()
      discoPosition -= 14
      addDisco()
    } else {
      clearInterval(ballMovement)
    }
  }, 1000);
}
//<<<<<<<<Event Listner for mouseClick on StartGame button>>>>>//
start.addEventListener('click', moveDiscoBall)

//!make event listner for spacebar later






// 8. tell ball how to move dependent upon which cell it hits on the bar




// 9. assign pts to cell position of bricks


// 10. score pts when ball hits brick cell position
//     - pts determined by location of brick
//     -pts tallied on scoreboard


// 11. make brick disappear when ball moves into location of brick



// 12. make ball move to bottom after ball moves into location of brick



// 13. if bar misses ball, turn over, ball returns to start position
