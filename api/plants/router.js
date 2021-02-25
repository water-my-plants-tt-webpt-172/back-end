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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('plants').where({ id }).first()
      .then(plant => {
          res.json(plant);
      })
      .catch(err => {
          res.status(500).json({
              message: 'Failed to retrieve plant by id.'
          })
      })
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

})

router.delete('/:id', (req, res) => {

})

module.exports = router;
