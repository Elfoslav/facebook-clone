Router.route('/', {
  name: 'home',
  data: function() {
    return {
      statuses: Statuses.find()
    }
  }
});

Router.route('/users/:username', {
  name: 'userProfile',
  waitOn: function() {
    Meteor.subscribe('friendRequests');
  },
  data: function() {
    return {
      user: Meteor.users.findOne({ username: this.params.username })
    };
  }
});

Router.configure({
  layoutTemplate: 'layout'
});