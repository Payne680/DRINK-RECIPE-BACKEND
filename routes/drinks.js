const express = require("express");
const Drink = require("../database/drink");
const router = express.Router();
router.get("/", async (req, res) => {
  const drinks = await Drink.findAll();
  res.json(drinks);
});
router.post("/", async (req, res) => {
  const drink = await Drink.create(req.body);
  res.json(drink);
});
router.post("/", async function (req, res) {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drink.create({
    name,
    description,
    imageUrl,
    recipe,
  });
  res.send(drink);
});
router.put("/:id", async function (req, res) {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drink.update(
    {
      name,
      description,
      imageUrl,
      recipe,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(drink);
});
router.patch("/:id", async function (req, res) {
  const { name, description, imageUrl, recipe } = req.body;
  const drink = await Drink.update(
    {
      name,
      description,
      imageUrl,
      recipe,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(drink);
});
router.delete("/:id", async function (req, res) {
 const drink = await Drink.destroy({ where: { id: req.params.id } });
  res.send("success");
});
module.exports = router;