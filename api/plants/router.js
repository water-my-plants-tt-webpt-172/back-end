const router = require("express").Router();

const db = require("./model");

router.get("/", (req, res) => {
  db.find()
    .then((plants) => {
      res.json(plants);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
