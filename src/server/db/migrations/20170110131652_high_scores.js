exports.up = (knex, Promise) => {
  return knex.schema.createTable('high_scores', (table) => {
    table.increments();
    table.string('username').notNullable();
    table.integer('total_score').notNullable();
    table.integer('total_moves').notNullable();
    table.integer('levels_beaten').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('high_scores');
};
