var express = require("express");
var app = express();

var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var csurf = require('csurf');
var user = require("./routes/user");


app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

// middleware
app.use(express.json());
app.use((express.urlencoded({extended:false})));
app.use(methodOverride('_method'))
app.use(function(err, req, res, next){
  res.send(err.message);
});

//csrf対策
app.use(cookieParser());
app.use(cookieSession({secret:"2348D&FSDF"}));
app.use(csurf());
app.use(function(req, res, next) {
  res.locals.csrftoken = req.csrfToken();
  next();
})

//routing
app.get("/", user.list);
app.get("/createForm", user.createForm);
app.post("/create", user.create);
app.get("/detail/:id", user.detail);
app.get("/updateForm/:id", user.updateForm);
app.put("/update/:id", user.update);
app.delete("/delete/:id", user.delete);


app.listen(3000);
console.log("server starting...");