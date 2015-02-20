validate = function(rule){
  if(rule === "") return "empty";
    else if(!validateSyntax(rule)) return "invalid-syntax";
    else if(true) return "invalid";
    else if(true) return "valid";
};

validateSyntax = function(rule){
  var ruleArray = rule.split(" ");
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
  "input .rule-input": function(event, template){
    var rules = Session.get("rules");
    rules[this.id-1].rule = event.target.value;
    rules[this.id-1].validation = validate(rules[this.id-1].rule);
    Session.set("rules", rules);
  }
});
