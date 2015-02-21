Template.itemcp.helpers({
  selectedLetter: function(btn){
    if(btn === Session.get("selectedLetter")) return "selected";
  },
  selectedShape: function(btn){
    if(btn === Session.get("selectedShape")) return "selected";
  },
  selectedSize: function(btn){
    if(btn === Session.get("selectedSize")){
      if(btn === 'small-button') return 'selected-small';
      if(btn === 'medium-button') return 'selected-medium';
      if(btn === 'large-button') return 'selected-large';
    }
  }
});
Template.itemcp.events({
  "click .letter-button": function(event, template){
    Session.set("selectedLetter", event.currentTarget.innerHTML + "-button");
  },
  "click .shape-button": function(event, template){
    Session.set("selectedShape", event.currentTarget.id);
  },
  "click .size-button": function(event, template){
    Session.set("selectedSize", event.currentTarget.id);
  },
});
