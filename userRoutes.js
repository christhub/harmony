var parse = require('co-body');
var monk = require("monk");
var wrap = require("co-monk");
var db = monk("localhost/usersApi");
var users = wrap(db.get("users"));
module.exports.users = users;

module.exports.add = function * () {
  //parse incooming user
  var postedUser = parse(this);
  // store in db
  var insertedUser = yield users.insert(postedUser);
  //return loation of user and HTTP ok
  this.set("location", "/user/" + insertedUser._id);
  this.status = 200;
};


module.exports.get = function*get(id){
  this.body = "you passed me: " + id;
};
