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

router.post('/', (req, res) => {
  const plantData = req.body;
  db('plant').insert(plantData)
      .then(ids => {
          db('plant').where({ id: ids[0] })
              .then(newPlantEntry => {
                  res.status(201).json(newPlantEntry);
              })
      })
      .catch(err => {
          console.log('POST error', err);
          res.status(500).json({
              message: 'Failed to store plant data.'
          })
      })
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
