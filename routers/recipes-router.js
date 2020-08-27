const express = require("express")
const Recipe = require("../models/recipes")
const router = express.Router()


router.get("/", (req, res) => {
    Recipe.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get recipes"})
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params

    Recipe.getRecipeById(id)
    .then(recipe => {
        if(recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({message: "Cannot find recipe with this ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get recipe"})
    })
})

module.exports = router