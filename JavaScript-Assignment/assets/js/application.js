$(document).ready(function() {
  var userBoard = new Board(true),
      computerBoard = new Board(false),
      userEl = document.querySelector('.user.board'),
      computerEl = document.querySelector('.computer.board'),
      userView = new View(userEl, userBoard),
      computerView = new View(computerEl, computerBoard);

 function getIndex (message) {
  // prompt for input
  // coerce to 0-15
  // if user has guessed this number -> loop
  //  else -> return that number

  var input = prompt(message);
   if (input > 15) {
    input = 15
    } else if (input < 0){
      input = 0
    }
    return input
  }

  function computerGuess(){
    // get a number 0-15
    // if computer has guessed this number
    //   loop
    // else
    //   return that number
    return Math.floor(Math.random() * 15)
  }

  function turn(model, input, view, message){
    model.guess(input)
    view.render()
    if (model.over){
      alert(message)
    }
  }

  userBoard.placeShip(getIndex('Place your ship.  Enter a number 0 - 15.'));
  computerBoard.placeShip(computerGuess());
  userView.render();
  computerView.render();

  while (!(computerBoard.over || userBoard.over)){
    turn(computerBoard, getIndex('Make your move.  Enter a number 0 - 15.'), computerView, 'User Won. Game Over.');
    turn(userBoard, computerGuess(), userView, 'Computer Won. Game Over.');
  }
});




