
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('high_scores').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('high_scores').insert({
          username: 'Player10',
          total_score: 100,
          total_moves: 25,
          levels_beaten: 1
        }),
        knex('high_scores').insert({
          username: 'Player9',
          total_score: 200,
          total_moves: 35,
          levels_beaten: 2
        }),
        knex('high_scores').insert({
          username: 'Player8',
          total_score: 300,
          total_moves: 45,
          levels_beaten: 3
        }),
        knex('high_scores').insert({
          username: 'Player7',
          total_score: 400,
          total_moves: 55,
          levels_beaten: 4
        }),
        knex('high_scores').insert({
          username: 'Player6',
          total_score: 500,
          total_moves: 65,
          levels_beaten: 5
        }),
        knex('high_scores').insert({
          username: 'Player5',
          total_score: 600,
          total_moves: 75,
          levels_beaten: 6
        }),
        knex('high_scores').insert({
          username: 'Player4',
          total_score: 700,
          total_moves: 85,
          levels_beaten: 7
        }),
        knex('high_scores').insert({
          username: 'Player3',
          total_score: 800,
          total_moves: 95,
          levels_beaten: 8
        }),
        knex('high_scores').insert({
          username: 'Player2',
          total_score: 900,
          total_moves: 100,
          levels_beaten: 9
        }),
        knex('high_scores').insert({
          username: 'Player1',
          total_score: 1000,
          total_moves: 110,
          levels_beaten: 10
        })
      ]);
    });
};
