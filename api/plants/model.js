const db = require("../../data/knexConfig");

module.exports = {
  add,
  find,
  findById,
  findBy,
  update,
  remove,
};

function find() {
  return db("plants")
    .select("id", "nickname", "species", "h2oFrequency", "user_id", "img")
    .orderBy("id");
}

function findBy(filter) {
  console.log(filter);
  return db("plants").where({ user_id: filter }).orderBy("id");
}

function findById(id) {
  return db("plants").where({ id }).first();
}

async function add(plant) {
  const [id] = await db("plants").insert(plant);
  return findById(id);
}

async function update(id, changes) {
  const count = await db("plants").where({ id }).update(changes);
  return count;
}

async function remove(id) {
  const count = await db("plants").where({ id }).del();
  return count;
}
