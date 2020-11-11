var mysql = require("mysql");

let conn = mysql.createPool({
  host: "us-cdbr-east-02.cleardb.com",
  user: "b08f67fae60608",
  password: "cc4a53c5",
  database: "heroku_1f2c2b288ea1536",
  multipleStatements: true,
  connectionLimit: 5,
});

conn.on("connection", (c) => {
  console.log("Database connected at " + c.threadId);

  c.on("error", function (err) {
    console.error(new Date(), "MySQL error", err.code);
  });
  c.on("close", function (err) {
    console.error(new Date(), "MySQL close", err);
  });
});

module.exports = conn;
