//<<<<<Create the variables needed and attach to HTML classes >>>//

//*Variables needed*//: 


// * width
const width = 14
// const gridWidth = 1500;
// const brickWidth = 105;
// const paddleWidth = 420;
//*height
// const height = 9;
// * cell count
const gridCellCount = 154;
// * start game button
const startGame = document.getElementById('#start');
// *audio
// * score display
// const scoreDisplay = document.querySelector('#score-display');
// * score tally
let score = 0;
// * x =
// const x = [0]
// * y =
// const y = [1]
// * brick

// * grid
const grid = document.querySelector('.grid');

const cells = [];

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

//create the grid w/divs & grid classes 
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const gameGrid = document.createElement('div');
    if (i <= 27) {
      gameGrid.className = 'purple';   //color the grid classes - grid classes = .purple, .green, .yellow, .hidden, .paddle
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
  }
}

createGrid()

//outer grid wall 


// 3 create the bar - paddleBar = [140, 141, 142, 143]
// let paddle = document.querySelectorAll('.paddle');
// let paddlePosition = 145 && 146 && 147 && 148;
let paddlePosition = 145
// let currentIndex = paddlePosition

function handleKeys(event) {
  
  // const xPosition = currentIndex % width;
  // const yPosition = Math.floor(currentIndex / width);

  switch (event.keyCode) {    // 4. assign key directions
    case 39:                   // 5. move the bar with key arrow func
      if (paddlePosition <= 150 - 1) {
        removePaddle(paddlePosition)
        paddlePosition++
        addPaddle(paddlePosition + 3)
        console.log(paddlePosition)  // 6. make sure it works (console.log)
      }
      break
    case 37:
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

document.addEventListener('keyup', handleKeys)

// 7. attach img of ball to cell position
// const ballStart = [133]
// let ballCurrentPosition = ballStart

// const discoBall = document.querySelector('img')
// const ball = document.createElement('div')
// ball.classList.add('ball')
// ball.target.add(discoBall)
// ball.style.left = ballCurrentPosition[0] + 'px'
// ball.style.bottom = ballCurrentPosition[1] + 'px'
// grid.appendChild(ball)
// 8. tell ball how to move dependent upon which cell it hits on the bar


// 9. assign pts to cell position of bricks


// 10. score pts when ball hits brick cell position
//     - pts determined by location of brick
//     -pts tallied on scoreboard


// 11. make brick disappear when ball moves into location of brick



// 12. make ball move to bottom after ball moves into location of brick



// 13. if bar misses ball, turn over, ball returns to start position
