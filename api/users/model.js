const db = require("../../data/knexConfig");

module.exports = {
  add,
  find,
  findById,
  findBy,
  update,
};

function find() {
  return db("users").select("id", "username", "password").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function update(id, changes) {
  return db("users").where({ id }).update(changes, "*");
}
