const bcrypt = require("bcrypt");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        { username: "lily", password: bcrypt.hashSync("zhou", 16) },
        { username: "dora", password: bcrypt.hashSync("belme", 16) },
        { username: "tommy", password: bcrypt.hashSync("kindle", 16) }
      ]);
    });
};
