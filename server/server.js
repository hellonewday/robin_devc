const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./connection");
const port = process.env.PORT || 5000;

const users = require("./routes/users");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", users);

connection.connect((error) => {
  if (error) console.log(error);
  else {
    console.log("Connect to database");
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
});
