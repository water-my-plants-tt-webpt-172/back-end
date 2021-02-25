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
    const data = await db.getById(id)
    res.status(200).json(data);
  } catch(err) {
      next(err);
  }
})

router.post('/', async (req, res) => {
  const body = req.body;
  try {
      const data = await db.insert(body);
      res.json(data);
  } catch(err) {
      next(err);
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
        return Schemes.update(changes, id);
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id' });
      }
    })
    .then(updatedScheme => {
      res.json(updatedScheme);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update scheme' });
    });
})

router.delete('/:id', (req, res) => {

})

module.exports = router;
