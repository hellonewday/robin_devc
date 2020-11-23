const router = require("express").Router();
const connection = require("../connection");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM Film", (error, results) => {
    if (error) return res.status(400).json({ success: false, error });
    else return res.status(200).json({ success: true, data: results });
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM Film Where id = ${req.params.id}`,
    (error, result) => {
      if (error) return res.status(400).json({ success: false, error });
      else return res.status(200).json({ success: true, data: result });
    }
  );
});

router.post("/watched/:id", (req, res) => {
  connection.query(
    `SELECT * FROM WatchedFilm WHERE user = ${req.body.user} AND film = ${req.body.id}`,
    (error, result) => {
      if (error) return res.status(400).json({ success: false, error });
      else if (result.length === 0) {
        connection.query(
          `INSERT INTO watchedFilm values (${req.body.user},${req.params.id},${req.body.rating})`,
          (error, response) => {
            if (error) return res.status(400).json({ success: false, error });
            else return res.status(200).json({ success: true, response });
          }
        );
      } else {
        connection.query(
          `update watchedfilm set rating = ${req.body.rating} where user = ${req.body.user}`,
          (error, response) => {
            if (error) return res.status(400).json({ success: false, error });
            else return res.status(200).json({ success: true, response });
          }
        );
      }
    }
  );
});

module.exports = router;
