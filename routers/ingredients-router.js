const express = require("express")
const Ingredients = require("../models/ingredients")
const router = express.Router()

router.get("/", (req, res) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.json(ingredients)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get ingredients"})
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params

    Ingredients.getIngredientsById(id)
    .then(ingredient => {
        if(ingredient) {
            res.json(ingredient)
        } else {
            res.status(404).json({message: "Cannot find Ingredient with this ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get Ingredient"})
    })
})

module.exports = router