/**
 * Created by kira on 2017-08-25.
 */
var mysql = require('mysql');

var host = '35.200.6.177';
var user = 'root';
var pwd = 'qwe123';
var database = 'home_db';

exports.conn = mysql.createConnection({
	host: host,
	user: user,
	password: pwd,
	database: database
});