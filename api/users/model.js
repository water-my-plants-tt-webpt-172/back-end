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

async function findBy(filter) {
  const user = await db("users").where(filter).orderBy("id").first();
  return user;
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

async function update(id, changes) {
  const updatedUser = await db("users")
    .where({ id })
    .update(changes, ["id", "username", "password"]);
  if (updatedUser) {
    return findById(id);
  }
}
