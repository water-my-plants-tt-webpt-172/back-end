const router = require("express").Router();

const Users = require("../users/model.js");

router.post("/register", (req, res) => {
    console.log("credentials router.js line 6", req.body)
    const credentials = req.body;
  
    if (isValid(credentials)) {
      Users.add(credentials)
        .then(user => {
          res.status(201).json({ data: user });
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
});

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (isValid(req.body)) {
      Users.findBy({ username: username })
        .then(([user]) => {
            res.status(200).json({ message: "Welcome to our API", token });
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
});


function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string");
}

module.exports = router;