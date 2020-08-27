const db = require("../data/config")

function getRecipes() {
    return db("recipes")
}

function getRecipeById(id) {
    return db("recipes")
    .where("id", id)
    .first()
}

module.exports = {
    getRecipes,
    getRecipeById
}