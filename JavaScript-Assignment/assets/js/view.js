function View(el, model){
  this.el = el;
  this.model = model;
}

View.prototype.template = function(){
  var html = '';

  for (var i = 0; i < this.model.board.length; i++){
    var otherClasses = '';

    if (this.model.board[i] === SHIP && this.model.human) {
      otherClasses = 'ship'
    } else if (this.model.board[i] === MISS) {
      otherClasses = 'miss'
    } else if (this.model.board[i] === HIT) {
      otherClasses = 'hit'
    }

    html += '<div class="cell ' + otherClasses + '"></div>'
  }
  return html
}

View.prototype.render = function(){
  this.el.innerHTML = this.template();
}
