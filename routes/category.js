const express = require("express");
const Category = require("../database/category");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

router.post("/", async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const category = await Category.create({
    name,
    description,
  });
  res.send(category);
});

router.put("/:id", async function (req, res) {
  const { name, description } = req.body;
  const category = await Category.update(
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
  res.send(category);
});

router.patch("/:id", async function (req, res) {
  const { name, description } = req.body;
  const category = await Category.update(
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
  res.send(category);
});

router.delete("/:id", async function (req, res) {
 const category = await Category.destroy({ where: { id: req.params.id } });
  res.send("success");
});
module.exports = router;