Template.rules.helpers({
  rules: function(){
    return Session.get("rules");
  },
  space: function(){
    if(this.id < 10) return "0";
      else return "";
  }
});

Template.rules.events({
  "input .rule-input": function(event, template){
    var rules = Session.get("rules");
    rules[this.id-1].rule = event.target.value;
    Session.set("rules", rules);
  }
});
