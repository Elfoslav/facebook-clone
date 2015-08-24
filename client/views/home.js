Template.home.helpers({
  getUsername: function() {
    var user = Meteor.users.findOne(this.userId);
    if (user) {
      return user.username;
    }
  }
});

Template.home.events({
  'submit #insert-status': function(e) {
    e.preventDefault();
    Statuses.insert({
      text: e.target.text.value,
      userId: Meteor.userId(),
      timestamp: Date.now()
    });
    e.target.text.value = '';
  }
});