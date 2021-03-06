
exports.up = function(knex) {
  return knex.schema.table('plants', (tbl)=>{
    tbl.text('image_url',longtext);
    tbl.date('isWatered');
  })
};

exports.down = function(knex) {

};
