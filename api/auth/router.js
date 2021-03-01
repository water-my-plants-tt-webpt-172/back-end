require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const db = require("../users/model");
const { isValid } = require("../users/middleware");

router.post("/register", async (req, res) => {
  const credentials = req.body;

  try {
    if (isValid(credentials)) {
      const rounds = parseInt(process.env.BCRYP_ROUNDS);
      const hash = bcrypt.hashSync(credentials.password, rounds);
      credentials.password = hash;
      const user = await db.add(credentials);
      const token = generateToken(user);
      res.status(201).json({ data: user, token });
    } else {
      res.status(400).json({
        message: "username or password missing, or password not alphanumeric",
      });
    }
  } catch (err) {
    res.status(500).json({ meesage: "Internal Error" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.status(400).json({
        message: "username or password missing, or password not alphanumeric",
      });
    } else {
      const user = await db.findBy({ username }).first();
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ data: user, token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: "User not found" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.name,
    rolename: user.rolename,
  };
  const options = {
    expiresIn: "1d",
  };
  const token = jwt.sign(payload, secret, options);
  return token;
}

module.exports = router;
