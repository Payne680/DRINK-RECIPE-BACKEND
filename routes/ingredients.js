const express = require("express");
const Ingredient = require("../database/ingredient");
const router = express.Router();

router.get("/", async (req, res) => {
  const ingredients = await Ingredient.findAll();
  res.json(ingredients);
});

router.post("/", async (req, res) => {
  const ingredient = await Ingredient.create(req.body);
  res.json(ingredient);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const ingredient = await Ingredient.create({
    name,
    description,
  });
  res.send(ingredient);
});

router.put("/:id", async function (req, res) {
  const { name, description } = req.body;
  const ingredient = await Ingredient.update(
    {
      name,
      description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(ingredient);
});

router.patch("/:id", async function (req, res) {
  const { name, description } = req.body;
  const ingredient = await Ingredient.update(
    {
      name,
      description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(ingredient);
});

router.delete("/:id", async function (req, res) {
 const ingredient = await Ingredient.destroy({ where: { id: req.params.id } });
  res.send("success");
});
module.exports = router;