UserFriends = new Mongo.Collection('userFriends');
var Schemas = {};
Schemas.UserFriends = new SimpleSchema({
  userId1: {
    type: String
  },
  userId2: {
    type: String
  },
  timestamp: {
    type: Number
  }
});
UserFriends.attachSchema(Schemas.UserFriends);

Statuses = new Mongo.Collection('statuses');
Schemas.Statuses = new SimpleSchema({
  text: {
    type: String,
    label: 'Text'
  },
  userId: {
    type: String
  },
  timestamp: {
    type: Number
  }
});
Statuses.attachSchema(Schemas.Statuses);