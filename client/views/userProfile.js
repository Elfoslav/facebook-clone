Template.userProfile.helpers({
  hasFriendRequest: function() {
    console.log('this.user: ', this.user);
    console.log('Meteor.user().hasRequestFrom(this.user)', Meteor.user().hasRequestFrom(this.user));
    if (Meteor.user() && this.user) {
      return Meteor.user().hasRequestFrom(this.user);
    }
  },
  friends: function() {
    console.log('friends: ', this.user.friends().fetch());
    return this.user.friends().fetch();
  }
});

Template.userProfile.events({
  'click .add-friend': function(e, tpl) {
    var user = tpl.data.user;
    console.log('adding a friend', user.username);
    user.requestFriendship();
  },
  'click .cancel-friendship': function(e, tpl) {
    var user = tpl.data.user;
    friendRequest = Request.collection.findOne();
    if (friendRequest) {
      friendRequest.cancel();
    }
  },
  'click .confirm-friendship': function(e, tpl) {
    var user = tpl.data.user;
    friendRequest = Request.collection.findOne();
    if (friendRequest) {
      friendRequest.accept();
    }
  }
});