const router = require("express").Router();
const bcrypt = require("bcryptjs");
const connection = require("../connection");
const jwt = require("jsonwebtoken");
router.get("/", (req, res) => {
  connection.query("SELECT * FROM User", (error, results) => {
    if (error) return res.status(400).json({ success: false, error });
    else
      return res
        .status(200)
        .json({ success: true, counts: results.length, data: results });
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM User Where uid = ${req.params.id}`,
    (error, results) => {
      if (error) return res.status(400).json({ success: false, error });
      else return res.status(200).json({ success: true, data: results });
    }
  );
});

router.post("/", (req, res) => {
  // Validation
  const { username, password, gender, email, fullname, age } = req.body;
  bcrypt.hash(password, 10, (error, hash) => {
    if (error) return res.status(400).json({ success: false, error });
    else {
      connection.query(
        `insert into user(username,password,gender,email,fullname,age) values ('${username}','${hash}',"${gender}",
      "${email}","${fullname}",${age});`,
        (error, result) => {
          if (error) return res.status(400).json({ success: false, error });
          else return res.status(201).json({ success: true, data: result });
        }
      );
    }
  });
});

router.post("/facebook", (req, res) => {
  let { email } = req.body;
  connection.query(
    `SELECT * FROM User Where email = '${email}'`,
    (error, result) => {
      if (error) return res.status(400).json({ success: false, error });
      else if (result.length === 0)
        return res
          .status(404)
          .json({ message: "No data for this facebook", success: false });
      else {
        let token = jwt.sign(
          { id: result[0].uid, username: result[0].username },
          "s3cr4t",
          {
            expiresIn: "7d",
          }
        );
        return res.status(200).json({
          success: true,
          header: `Bearer ${token}`,
          id: result[0].uid,
          username: result[0].username,
        });
      }
    }
  );
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  connection.query(
    `SELECT * FROM User WHERE username = '${username}'`,
    (error, result) => {
      // console.log(result);
      if (error) return res.status(400).json({ success: false, error });
      else if (result.length === 0)
        return res
          .status(404)
          .json({ success: false, message: "Login failed" });
      else {
        bcrypt.compare(password, result[0].password, (error, success) => {
          if (error) return res.status(400).json({ success: false, error });
          else {
            let token = jwt.sign(
              { id: result[0].uid, username: result[0].username },
              "s3cr4t",
              {
                expiresIn: "7d",
              }
            );
            return res.status(200).json({
              success: true,
              header: `Bearer ${token}`,
              id: result[0].uid,
              username: result[0].username,
            });
          }
        });
      }
    }
  );
});

module.exports = router;
