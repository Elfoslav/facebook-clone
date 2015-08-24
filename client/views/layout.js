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
  }
});
