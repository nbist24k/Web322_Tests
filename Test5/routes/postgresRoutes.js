const express = require("express");
const router = express.Router();
const { Recipe } = require("../models/postgresModel");

// Main page route
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      order: [["id", "ASC"]],
    });
    res.render("index", { recipes });
  } catch (error) {
    res.status(500).render("index", { recipes: [], error: error.message });
  }
});

// Create a new recipe
router.post("/recipes", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    console.error("Create error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Get all recipes
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      order: [["id", "ASC"]],
    });
    // Extract and log only the dataValues
    const plainRecipes = recipes.map((recipe) => recipe.dataValues);
    console.log("Getting all recipes:", plainRecipes);
    res.json(recipes);
  } catch (error) {
    console.error("Get all error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get a single recipe
router.get("/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (recipe) {
      const plainRecipe = recipe.dataValues;
      console.log("Getting single recipe:", req.params.id, plainRecipe);
      res.json(recipe);
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.error("Get single error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Update a recipe
router.put("/recipes/:id", async (req, res) => {
  try {
    const [updated] = await Recipe.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    if (updated) {
      const updatedRecipe = await Recipe.findByPk(req.params.id);
      const plainRecipe = updatedRecipe.dataValues;
      console.log("Updating recipe:", req.params.id, plainRecipe);
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ error: error.message });
  }
});

// Delete a recipe
router.delete("/recipes/:id", async (req, res) => {
  try {
    const deleted = await Recipe.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.json({ message: "Recipe deleted successfully" });
    } else {
      res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
