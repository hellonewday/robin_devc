const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const server = require("http").Server(app);
const io = require("socket.io")(server);
const users = require("./routes/users");
const films = require("./routes/films");

app.use(
  cors({
    origin: [
      "https://localhost:3000",
      "http://localhost:3000",
      "https://donobox.me",
    ],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", users);
app.use("/films", films);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
