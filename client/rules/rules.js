validate = function(input){
  var rule = removeSpaces(input);
  if(validateSyntax(rule)){
    var ruleArray = rule.split(" ");
    var result = validateFunction(ruleArray);
    if(result === true) return "valid";
    if(result === false) return "invalid";
  } else return "invalid-syntax";
};

validateFunction = function(func){
  console.log('FUNCTION:' + func);
  var board = Session.get("board");
  if (func.length === 1) {
    if (func[0] === true) return true;
  }

  func = solvePredicates(func);

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
