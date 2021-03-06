const router = require("express").Router();

const db = require("./model");

router.get("/", (req, res) => {
  db.find()
    .then((plants) => {
      res.json(plants);
    })
    .catch((err) => res.send(err));
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.findById(id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});


router.get("/user/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  try {
    const data = await db.findBy(user_id);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  let body = req.body;
  try {
    if(req.files.foo.data){
      body = {...body, img: req.files.foo.data}
    }
    const data = await db.add(body);
    res.json(data);
  } catch (err) {
    next(err);
  }
});


router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const data = await db.findById(id);
    if (data) {
      const data = await db.update(id, changes);
      res.status(200).json(data);
    } else {
      res.status(404).json({
        message: "Could not find plant with given id.",
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.remove(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
