$(document).ready(function() {
  var userBoard = new Board(true),
      computerBoard = new Board(false),
      userEl = document.querySelector('.user.board'),
      computerEl = document.querySelector('.computer.board'),
      userView = new View(userEl, userBoard),
      computerView = new View(computerEl, computerBoard),
      newGame = new GameController(userBoard, computerBoard, userView, computerView);

  newGame.placeShips();
  newGame.start();

  $('.button').on('click', function(){
    $('window').reload();
  })
});