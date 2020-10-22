var mysql = require("mysql");

module.exports.connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "robin",
});
