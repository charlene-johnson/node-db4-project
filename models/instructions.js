const db = require("../data/config")

function getInstructions() {
    return db("recipes")
}

function getInstructionsById(id) {
    return db("recipes")
    .where("id", id)
    .first()
}