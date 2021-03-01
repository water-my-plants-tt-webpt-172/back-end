const router = require("express").Router();

const db = require("./model");

router.get("/", (req, res) => {
  db.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  db.update(id, changes)
    .then((user) => {
      db.findById(user)
        .then((updateduser) => {
          res.status(200).json(updateduser);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
