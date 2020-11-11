var mysql = require("mysql");

let conn = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b08f67fae60608",
  password: "cc4a53c5",
  database: "heroku_1f2c2b288ea1536",
  multipleStatements: true,
});

conn.connect((err) => {
  if (err) console.log(err.stack);
  console.log("Connected as " + conn.threadId);
});

module.exports = conn;
