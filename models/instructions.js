const db = require("../data/config")

function getInstructions(recipe_id) {
    return db("recipes")
}
