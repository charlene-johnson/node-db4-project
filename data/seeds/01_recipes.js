
exports.seed = async function(knex) {
  await knex("recipes").insert([
    {name:"Bacon"},
    {name: "Cheesey Eggs"},
    {name: "Waffles"},
    {name: "Hashbrowns"},
  ])
};
