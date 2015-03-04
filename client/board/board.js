Template.board.helpers({
  board: function(){
    return Session.get("board");
  },
  newLine: function(){
    if(this.id % 8 === 7){
      return true;
    } else return false;
  },
  bgcolor: function(){
    var mode = true;
    var counter = 0;
    var result;
    for(i = 0; i <= this.id; i++){
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
  },
  letterIsSet: function(){
    if(this.letter !== "none") return true;
      else return false;
  }
});

Template.board.events({
  "click .board-field": function(event, template){
    var result = "";
    var board = Session.get("board");
    if(Session.get("selectedShape") !== "none" && Session.get("selectedShape") !== "erase-button"){
      board[this.id].shape = Session.get("selectedShape").split("-")[0];
      board[this.id].letter = Session.get("selectedLetter").split("-")[0];
      board[this.id].size = Session.get("selectedSize").split("-")[0];
    } else if(Session.get("selectedShape") === "erase-button"){
      board[this.id].shape = "none";
      board[this.id].letter = "none";
      board[this.id].size = "none";
    }
    Session.set("board", board);

    // Validate Ruleset
    var rules = Session.get("rules");
    for(i = 0; i < rules.length; i++){
      if(rules[i].rule !== "")
        rules[i].validation = validate(rules[i].rule);
    }
    Session.set("rules", rules);
    var element = $(".board-field");
    element.addClass("animated");
    element.addClass("bounceInLeft");
    //element.removeClass("animated");
    //element.removeClass("bounceInLeft");
  }
});
