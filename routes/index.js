var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  fs.readFile('views/index.html', function(err, data){
    res.send(data.toString());
  });
});

module.exports = router;
