
exports.up = function(knex) {
  return knex.table('plants', (table)=>{
    tbl.text('image_url',longtext);
    tbl.date('isWatered');
  })
};

exports.down = function(knex) {
    return knex.schema.dropColumn("image_url",'isWatered');
};
