var co = require('co');
var users = require('./userRoutes.js').users;

var app = require('./app.js');
var request = require('supertest').agent(app.listen());

describe('simple user api:', function(){

  var test_user = { name: "christian", City: "Portland, OR"};

  it('creates a new user', function(done){

    request
      .post('/user')
      .send(test_user)
      .expect('location', /^\/user\/[0-9a-fA-F]{24}$/)
      .expect(200, done);

  });

});
