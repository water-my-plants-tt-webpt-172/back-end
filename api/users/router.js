require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const rounds = parseInt(process.env.BCRYP_ROUNDS);

const db = require("./model");

router.get("/", (req, res) => {
  db.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.send(err));
});

router.patch("/:id", async (req, res) => {
  console.log(req.decodedToken);
  const id = req.params.id;
  const changes = req.body;
  if (changes.password) {
    const hash = bcrypt.hashSync(changes.password, rounds);
    changes.password = hash;
  }
  try {
    const updatedUser = await db.update(id, changes);
    res.status(200).json(updatedUser);
  } catch {
    res.status(400).json({ message: "internal Error" });
  }
});

module.exports = router;
