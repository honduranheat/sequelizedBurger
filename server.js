var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require('method-override');
var routes = require("./controllers/burgers_controller.js");
var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use('/', routes);

app.listen(PORT, function() {
  console.log("listening on port", PORT);
}); 