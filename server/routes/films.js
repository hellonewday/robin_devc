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
module.exports = router;
