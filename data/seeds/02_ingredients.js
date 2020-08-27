
exports.seed = async function(knex) {
  await knex("ingredients").insert([
    {name: "slices of bacon", quantity: 4},
    {name: "eggs", quantity: 4},
    {name: "tbsp of salt", quantity: 1},
    {name: "tbsp of pepper", quantity: 1},
    {name: "slices of Cheese", quantity: 2},
    {name: "waffles", quantity: 2},
    {name: "some butter", quantity: 1},
    {name: "some syrup", quantity: 1},
    {name: "potatoes", quantity: 4},
    {name: "bellpeppers", quantity: 1},
    {name: "onion", quantity: 1},
    {name: "garlic cloves", quantity: 2},
    {name: "tbsp season salt", quantity: 1.5},
  ])
};
