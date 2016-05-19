const NULL = 0,
      SHIP = 1,
      MISS = 2,
      HIT  = 3;

function Board(isHuman){
  this.board = this.getDefaultBoard();
  this.human = isHuman;
  this.over = false;
}

Board.prototype.getDefaultBoard = function(){
  var board = [];

  for (var i = 0; i < 16; i++){
    board.push(NULL)
  }
  return board;
}

Board.prototype.placeShip = function(index){
  this.board[index] = SHIP
}

// another method, hasGuessed(index) {
// if value at given index is ship or null -> false else true
//}

Board.prototype.guess = function(index){
  if (this.board[index] === SHIP) {
    this.board[index] = HIT;
    this.over = true;
  } else {
    this.board[index] = MISS;
  }
}







