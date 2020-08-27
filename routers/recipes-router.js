const express = require("express")
const Recipe = require("../models/recipes")
const router = express.Router()


router.get("/", async (req, res, next) => {
    try {
        const recipes = await Recipe.getRecipes()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const recipe = await Recipe.getRecipeById(req.params.id)
        if(!recipe) {
            return res.status(404).json({
                message: "Cannot find a recipe with this ID"
            })
        }
        res.json(recipe)
    } catch(err) {
        next(err)
    }
 })

 router.get("/:id/shoppingList", async (req, res, next) => {
    try {
         const ingredients = await Recipe.getShoppingList(req.params.id)
         if(!ingredients) {
             return res.status(404).json({
                 message: "Cannot find a recipe with this ID"
             })
         }
         res.json(ingredients)
    } catch(err) {
        next(err)
    }
 })


module.exports = router