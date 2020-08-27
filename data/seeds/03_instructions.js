
exports.seed = async function(knex) {
  await knex("instructions").insert([
    {instructions: "Put bacon in oven", stepNumber: 1, recipe_id: 1},
    {instructions: "Cook for 15 mins", stepNumber: 2, recipe_id: 1},
    {instructions: "Put the eggs in the skillet", stepNumber: 1, recipe_id: 2},
    {instructions: "Season with salt and pepper", stepNumber: 2, recipe_id: 2},
    {instructions: "Add cheese", stepNumber: 3, recipe_id:2},
    {instructions: "Put waffle in toaster", stepNumber: 1, recipe_id: 3},
    {instructions: "Spread Butter on toasted waffle", stepNumber: 2, recipe_id: 3},
    {instructions: "Cut potatoes", stepNumber: 1, recipe_id: 4},
    {instructions: "Put in skillet", stepNumber: 2, recipe_id: 4},
    {instructions: "Add onion, bellpepper, season salt, pepper and garlic", stepNumber: 3, recipe_id: 4},
  ])
};
