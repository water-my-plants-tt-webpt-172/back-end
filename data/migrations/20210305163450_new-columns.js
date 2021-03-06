
exports.up = function(knex) {
  return knex.schema.table('plants', (tbl)=>{
    tbl.text('image_url',longtext);
    tbl.date('isWatered');
  })
};

exports.down = function(knex) {
    return knex.schema.table('plants', (tbl) => {
      tbl.dropColumn("image_url");
      tbl.dropColumn('isWatered');
    })
};
