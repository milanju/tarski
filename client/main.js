Meteor.startup(function () {
  Session.set("selectedLetter", "a-button");
  Session.set("selectedShape", "erase-button");
  Session.set("selectedSize", "small-button");

  var board = [];
  for(i = 1; i < 65; i++){
    board.push({
      id: i,
      shape: "none",
      size: "none",
      letter: "none"
    });
  }

  Session.set("board", board);

  var rules = [];
  for(i = 1; i <= 15; i++){

    rules.push({id: i, rule: ""});
  }

  Session.set("rules", rules);
});
