const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./connection");
const port = process.env.PORT || 5000;

const users = require("./routes/users");
const films = require("./routes/films");

app.use(
  cors({
    origin: ["https://localhost:3000", "http://localhost:3000"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", users);
app.use("/films", films);

connection.connect((error) => {
  if (error) console.log(error);
  else {
    console.log("Connect to database");
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  }
});
