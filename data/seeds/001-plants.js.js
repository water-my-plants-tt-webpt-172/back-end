exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("plants").insert([
        {
          id: 1,
          nickname: "Devil's ivy",
          species: "Epipremnum quorum",
          h2oFrequency: 3,
          user_id: 1,
        },
        {
          id: 2,
          nickname: "Angel Wings Cactus",
          species: "Opunta albispina",
          h2oFrequency: 1,
          user_id: 1,
        },
      ]);
    });
};
