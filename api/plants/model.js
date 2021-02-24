const db = require("../../data/knexConfig");

module.exports = {
  add,
  find,
  findById,
  findBy,
};

function find() {
  return db("plants")
    .select("id", "nickname", "species", "h2oFrequency")
    .orderBy("id");
}

function findBy(filter) {
  return db("plants").where(filter).orderBy("id");
}

function findById(id) {
  return db("plants").where({ id }).first();
}

async function add(plant) {
  const [id] = await db("plants").insert(plant);
  return findById(id);
}
