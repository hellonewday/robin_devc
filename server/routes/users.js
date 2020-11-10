const router = require("express").Router();
// const bcrypt = require("bcryptjs");
const { connection } = require("../connection");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM User", (error, results) => {
    if (error) return res.status(400).json({ success: false, error });
    else return res.status(200).json({ success: true, data: results });
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM User Where uid = ${req.params.uid}`,
    (error, results) => {
      if (error) return res.status(400).json({ success: false, error });
      else return res.status(200).json({ success: true, data: results });
    }
  );
});

module.exports = router;