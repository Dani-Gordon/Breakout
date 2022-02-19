//<<<<<Create the variables needed and attach to HTML classes >>>//

// variables needed: 
// * grid
const grid = document.querySelector('.grid');

const cells = [];



// * width
const width = 16;
//*height
const height = 9;
// * cell count
const gridCellCount = width * height;
// * start game button
const startGame = document.getElementById('#start');
// *audio
// * score display
// const scoreDisplay = document.querySelector('#score-display');
// * score tally
let score = 0;
// * x =
// * y =

// * brick




// 1. create the grid w/divs & grid classes 
function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const gameGrid = document.createElement('div');
    if (i <= 27) {
      gameGrid.className = 'purple';
    } else if  (i >= 28 && i < 56) {
      gameGrid.className = 'green';
    } else if (i >= 56 && i < 70) {
      gameGrid.className = 'yellow';
    } else if (i >= 140) { 
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

// 2. color the grid classes


//     -outer grid wall 


// 3 create the bar 


// 4. assign key directions


// 5. move the bar with key arrow func


// 6. make sure it works (console.log)


// 7. attach img of ball to cell position


// 8. tell ball how to move dependent upon which cell it hits on the bar


// 9. assign pts to cell position of bricks


// 10. score pts when ball hits brick cell position
//     - pts determined by location of brick
//     -pts tallied on scoreboard


// 11. make brick disappear when ball moves into location of brick



// 12. make ball move to bottom after ball moves into location of brick



// 13. if bar misses ball, turn over, ball returns to start position
