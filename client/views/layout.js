Template.layout.onRendered(function() {
  Meteor.typeahead.inject();
  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    console.log('Selection: ', suggestion.value);
    Router.go('userProfile', { username: suggestion.value });
  });
});

Template.layout.helpers({
  usernames: function () {
    return Meteor.users.find().fetch().map(function(user) {
      return user.username;
    });
  },
  friendRequests: function() {
    if (Meteor.user()) {
      return Meteor.user().requests();
    }
  }
});

Template.layout.events({
  'click .cancel-friendship': function(e, tpl) {
    var friendRequest = Request.collection.findOne({
      requesterId: this.requesterId,
      userId: Meteor.userId()
    });
    if (friendRequest) {
      friendRequest.cancel();
    }
  },
  'click .confirm-friendship': function(e, tpl) {
    var friendRequest = Request.collection.findOne({
      requesterId: this.requesterId,
      userId: Meteor.userId()
    });
    if (friendRequest) {
      friendRequest.accept();
    }
  }
});
