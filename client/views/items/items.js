Template.items.helpers({
  Items: function(){
    return Items.find();
  },
  selectedItem: function () {
    return Items.findOne(Session.get("selectedItem"));
  },
  formType: function () {
    if (Session.get("selectedItem")) {
      return "update";
    } else {
      return "insert";
    }
  }
});

Template.items.onRendered({

});

Template.items.events({
  "submit #insertItemsForm": function(e){
    $("input[name='item']").focus();
  },
  "click #newitem": function(e){
    Session.set('selectedItem', undefined)
  },
  "click #delitem": function(e){
    var id = Session.get("selectedItem");
    Meteor.call("deleteItem", id);
  }
});