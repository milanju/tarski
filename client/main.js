Meteor.startup(function () {
  Session.set("selectedLetter", "a-button");
  Session.set("selectedShape", "erase-button");
  Session.set("selectedSize", "small-button");

  var board = [];
  for(i = 0; i < 64; i++){
    board.push({
      id: i,
      shape: "none",
      size: "none",
      letter: "none"
    });
  }

  Session.set("board", board);

  var rules = [];
  for(i = 0; i < 15; i++){

    rules.push({id: i, rule: "", validation: "empty"});
  }

  Session.set("rules", rules);
});
