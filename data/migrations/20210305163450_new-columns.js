
exports.up = function(knex) {
  return knex.table('plants', (tbl)=>{
    tbl.text('image_url',longtext);
    tbl.date('isWatered');
  })
};

exports.down = function(knex) {
    return knex.dropColumn("image_url",'isWatered');
};
