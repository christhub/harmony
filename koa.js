var koa = require('koa');
var app = koa();
var routes = require("koa-route");

//routes
var userRoutes = require("./userRoutes.js");
app.use(routes.post("/user", userRoutes.add));
app.use(routes.get("/user/:id", userRoutes.get));
app.use(routes.put("/user/:id", userRoutes.update));
app.use(routes.del("/user/:id", userRoutes.remove));

//Fire it upppppppp ahahahhha

app.listen(6969);

console.log('your server has begun to begin...');
