require("dotenv").config();
const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      const user = {
        username: "tester",
        password: "tester",
        phone: "6669999999",
      };
      const rounds = parseInt(process.env.BCRYP_ROUNDS);
      const hash = bcrypt.hashSync(user.password, rounds);
      user.password = hash;
      return knex("users").insert([user]);
    });
};
