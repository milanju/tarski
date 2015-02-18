Template.board.helpers({
  board: function(){
    var board = [];
    for(i = 1; i < 65; i++){
      board.push({
        id: i,
        item: "none"
      });
    }
    return board;
  },
  newLine: function(){
    if(this.id % 8 === 0){
      return true;
    } else return false;
  },
  bgcolor: function(){
    var mode = true;
    var counter = 0;
    var result;
    for(i = 0; i < this.id; i++){
      if(counter === 8) {
        mode = !mode;
        counter = 0;
      }
      if(mode === true){
        if(this.id % 2 === 0) result = "bg-black";
          else result = "bg-white";
      } else {
        if(this.id % 2 !== 0) result ="bg-black";
          else result = "bg-white";
      }
      counter++;
    }
    return result;
  }
});
