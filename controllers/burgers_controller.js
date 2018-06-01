var express = require('express');
var burgers = require('../models/burger.js');


var router = express.Router();



router.get("/", function (req, res) {
  burgers.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function (req, res) {
  burgers.create([
    'burger_name'
  ], [
    req.body.burger_name
    
  ], function (result) {
   
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burgers.update({
    devoured: true
  }, condition, function (result) {
    res.redirect('/');
  });
});



module.exports = router;