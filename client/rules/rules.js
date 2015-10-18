validate = function(input){
  var rule = removeSpaces(input);
  if(validateSyntax(rule)){
    var ruleArray = rule.split(" ");
    var binaryArray = [];
    var result = true;
    for(i = 0; i < ruleArray.length; i++){
      binaryArray.push(validateFunction(ruleArray[i]));
    }
    for(j = 0; j < binaryArray.length; j++){
      if(binaryArray[j] === false) result = false;
    }
    if(result === true) return "valid";
    if(result === false) return "invalid";
  } else return "invalid-syntax";
};

validateFunction = function(f){
  var board = Session.get("board");
  var letter;
  var xloc;
  var yloc;
  var x;
  var y;

  // Check for Triangle(x)
  if(f.substr(0, 8) === "Triangle"){
    letter = (f.split("(")[1]).split(")")[0];
    for(i = 0; i < board.length; i++){
      if(board[i].shape === "triangle" && board[i].letter === letter) return true;
    }
  }

  // Check for Square(x)
  if(f.substr(0, 6) === "Square"){
    letter = (f.split("(")[1]).split(")")[0];
    for(i = 0; i < board.length; i++){
      if(board[i].shape === "square" && board[i].letter === letter) return true;
    }
  }

  // Check for Pentagon(x)
  if(f.substr(0, 8) === "Pentagon"){
    letter = (f.split("(")[1]).split(")")[0];
    for(i = 0; i < board.length; i++){
      if(board[i].shape === "pentagon" && board[i].letter === letter) return true;
    }
  }

  // Check for Small(x)
  if(f.substr(0, 5) === "Small"){
    letter = (f.split("(")[1]).split(")")[0];
    for(i = 0; i < board.length; i++){
      if(board[i].size === "small" && board[i].letter === letter) return true;
    }
  }

  // Check for Medium(x)
  if(f.substr(0, 6) === "Medium"){
    letter = (f.split("(")[1]).split(")")[0];
    for(i = 0; i < board.length; i++){
      if(board[i].size === "medium" && board[i].letter === letter) return true;
    }
  }

  // Check for Large(x)
  if(f.substr(0, 6) === "Large"){
    letter = (f.split("(")[1]).split(")")[0];
    for(i = 0; i < board.length; i++){
      if(board[i].size === "large" && board[i].letter === letter) return true;
    }
  }

  // Check for LeftOf(x, y)
  if(f.substr(0, 6) === "LeftOf"){
    x = f.split("(")[1][0];
    y = f.split(")")[0][f.length-2];
    for(i = 0; i < board.length; i++){
      if(board[i].letter === x) xloc = board[i].id;
      if(board[i].letter === y) yloc = board[i].id;
    }
    if(xloc % 8 < yloc % 8) return true;
  }

  // Check for RightOf(x, y)
  if(f.substr(0, 7) === "RightOf"){
    x = f.split("(")[1][0];
    y = f.split(")")[0][f.length-2];
    for(i = 0; i < board.length; i++){
      if(board[i].letter === x) xloc = board[i].id;
      if(board[i].letter === y) yloc = board[i].id;
    }
    if(xloc % 8 > yloc % 8) return true;
  }

  // Check for BelowOf(x, y)
  if(f.substr(0, 7) === "BelowOf"){
    x = f.split("(")[1][0];
    y = f.split(")")[0][f.length-2];
    for(i = 0; i < board.length; i++){
      if(board[i].letter === x) xloc = board[i].id;
      if(board[i].letter === y) yloc = board[i].id;
    }
    xloc -= xloc % 8;
    yloc -= yloc % 8;
    var xrow = xloc / 8;
    var yrow = yloc / 8;
    if(xrow > yrow) return true;
  }

  // Check for AboveOf(x, y)
  if(f.substr(0, 7) === "AboveOf"){
    x = f.split("(")[1][0];
    y = f.split(")")[0][f.length-2];
    for(i = 0; i < board.length; i++){
      if(board[i].letter === x) xloc = board[i].id;
      if(board[i].letter === y) yloc = board[i].id;
    }
    xloc -= xloc % 8;
    yloc -= yloc % 8;
    xrow = xloc / 8;
    yrow = yloc / 8;
    if(xrow < yrow) return true;
  }

  return false;
};

validateSyntax = function(input){
  var rule = input;
  var ruleArray = rule.split(" ");
  for(i = 0; i < ruleArray.length; i++){
    if(!isValidWord(ruleArray[i])) return false;
  }
  return true;
};

removeSpaces = function(input){
  var mode = false;
  var substr1;
  var substr2;
  var newstr;
  for(i = 0; i < input.length; i++){
    if(input[i] === "(") mode = true;
    if(input[i] === ")") mode = false;
    if(mode === true && input[i] === " "){
      substr1 = input.substr(0, i);
      substr2 = input.substr(i+1, input.length-1);
      newstr = substr1 + substr2;
      return removeSpaces(newstr);
    }
  }
  console.log(input);
  return input;
};
//Validation Helpers START
isQuantor = function(s){
  if(s === "E" || s === "A") return true;
    else return false;
};

isBinaryOperator = function(s){
  if(s === "&&" || s === "==" || s === "||") return true;
    else return false;
};

isNegation = function(s){
  if(s === "!") return true;
    else return false;
};

//Validation Helpers END
Template.rules.helpers({
  rules: function(){
    return Session.get("rules");
  },
  space: function(){
    if(this.id < 10) return "0";
      else return "";
  },
  isEmpty: function(){
    if(this.validation === "empty") return true;
      else return false;
  },
  isInvalidSyntax: function(){
    if(this.validation === "invalid-syntax") return true;
      else return false;
  },
  isInvalid: function(){
    if(this.validation === "invalid") return true;
      else return false;
  },
  isValid: function(){
    if(this.validation === "valid") return true;
      else return false;
  },
  allValid: function(){
    var rules = Session.get("rules");
    var valid = true;
    if(rules){
      for(i = 0; i < rules.length; i++){
        if(rules[i].validation === "invalid-syntax" || rules[i].validation === "invalid") {
          return false;
        }
      }
    }
    return true;
  }
});

Template.rules.events({
  'input .rule-input': function (event, template) {
    var rules = Session.get("rules");
    rules[this.id].rule = event.target.value;
    rules[this.id].validation = validate(rules[this.id].rule);
    Session.set("rules", rules);
  }
});
