
exports.up = function (knex) {
  return knex.schema.createTable("plants", (tbl) => {
    tbl.increments();
    tbl.string("nickname", 128).notNullable();
    tbl.string("species", 128).notNullable();
    tbl.integer("h2oFrequency").notNullable();
    tbl
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
              tbl.string('image_url');
          tbl.date('isWatered');
  });
};


exports.down = function (knex) {
  return knex.schema.dropTableIfExists("plants");
};
