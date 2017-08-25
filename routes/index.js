/* lib */
var express = require('express');
var fs = require('fs');

/* sql */
var db = require('./common/mysql_conn.js');
var sql = require('./sql/bbs.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  fs.readFile('index.html', function(err, data){
    res.send(data.toString());
  });

  db.conn.query( sql.query.free, [100], function(err, result, fields) {
    if(err) {
      console.log(err);
    }else{
      console.log(result);
    }
  });


});

module.exports = router;
