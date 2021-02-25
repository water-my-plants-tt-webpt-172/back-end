const router = require("express").Router();

const db = require("./model");

router.get("/", (req, res) => {
  db.find()
    .then((plants) => {
      res.json(plants);
    })
    .catch((err) => res.send(err));
});

//needed:
//get by id 
//post
//put (id)
//delete (id)

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await db.findById(id)
    res.status(200).json(data);
  } catch(err) {
      next(err);
  }
})

router.post('/', async (req, res) => {
  const body = req.body;
  try {
      const data = await db.add(body);
      res.json(data);
  } catch(err) {
      next(err);
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try{
      const data = await db.update(id, changes);
      res.json(data);
  } catch(err) {
      next(err);
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try{
      const data = await db.remove(id);
      res.json(data);
  } catch(err) {
      next(err);
  }
})

module.exports = router;
