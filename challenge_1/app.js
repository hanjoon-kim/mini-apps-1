var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Tic-Tac-Toe XOXO Gossip Girl';

var click = function() {
  console.log('clicked!')
};

var square = document.getElementsByClassName('square');
var turn = true;
var turnCount = 0;
var gameEnd = false;
var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var newGame = document.getElementById('new');
var playerOne = document.getElementById('player1');
var playerTwo = document.getElementById('player2');

newGame.addEventListener('click', function() {
 initialize();
});

var row1 = document.getElementsByClassName('r1');
var row2 = document.getElementsByClassName('r2');
var row3 = document.getElementsByClassName('r3');
var col1 = document.getElementsByClassName('c1');
var col2 = document.getElementsByClassName('c2');
var col3 = document.getElementsByClassName('c3');
var diag1 = document.getElementsByClassName('d1');
var diag2 = document.getElementsByClassName('d2');

var addClicks = function() {
  if (this.innerHTML === '') {
    if (turn) {
      this.innerHTML = 'X';
      turnCount++;
      checkState();
      turn = !turn;
    } else {
      this.innerHTML = 'O';
      turnCount++;
      checkState();
      turn = !turn;
    }
  }
};
  
var endGame = function() {
  for (let i = 0; i < square.length; i++) {
    var elem = square[i];
    elem.removeEventListener('click', addClicks, false);
  }
  if (turnCount !== 9) {
    if (turn) {
      scorePlayerOne++;
      playerOne.innerHTML = `Player 1's Score: ${scorePlayerOne}`;
    } else {
      scorePlayerTwo++;
      playerTwo.innerHTML = `Player 2's Score: ${scorePlayerTwo}`;
    }
  }
};

var checkState = function() {
  //next steps include grabbing the row and column of the click and only checking those
  checkRow(row1);
  checkRow(row2);
  checkRow(row3);
  checkColumn(col1);
  checkColumn(col2);
  checkColumn(col3);
  checkDiagonals(diag1);
  checkDiagonals(diag2);
  if (turnCount === 9 && !gameEnd) {
    alert('Draw game!');
  }
};

var checkRow = function(row) {
  for (let i = 0; i < col1.length; i++) {
    if ((row[0].innerHTML === 'X') && (row[1].innerHTML === 'X') && (row[2].innerHTML === 'X')) {
      alert('Player one (X) has won!');
      gameEnd = true;
      endGame();
      return;
    } else if ((row[0].innerHTML === 'O') && (row[1].innerHTML === 'O') && (row[2].innerHTML === 'O')) {
      alert('Player two (O) has won!');
      gameEnd = true;
      endGame();
      return;
    }
  }
};

var checkColumn = function(col) {
  for (let i = 0; i < row1.length; i++) {
    if ((col[0].innerHTML === 'X') && (col[1].innerHTML === 'X') && (col[2].innerHTML === 'X')) {
      alert('Player One (X) has Won!');
      gameEnd = true;
      endGame();
      return;
    } else if ((col[0].innerHTML === 'O') && (col[1].innerHTML === 'O') && (col[2].innerHTML === 'O')) {
      alert('Player Two (O) has Won!');
      gameEnd = true;
      endGame();
      return;
    }
  }
};

var checkDiagonals = function(diag) {
  for (let i = 0; i < diag1.length; i++) {
    if ((diag[0].innerHTML === 'X') && (diag[1].innerHTML === 'X') && (diag[2].innerHTML === 'X')) {
      alert('Player One (X) has Won!');
      gameEnd = true;
      endGame();
      return;
    } else if ((diag[0].innerHTML === 'O') && (diag[1].innerHTML === 'O') && (diag[2].innerHTML === 'O')) {
      alert('Player Two (O) has Won!')
      gameEnd = true;
      endGame();
      return;
    }
  }
};

var initialize = function() {
  for (let i = 0; i < square.length; i++) {
    var elem = square[i];
    elem.addEventListener('click', addClicks, false);
  }
  
  for (let i = 0; i < square.length; i++) {
    square[i].innerHTML = '';
  }
  
  turn = true;
  turnCount = 0;
  gameEnd = false;
};

initialize();

