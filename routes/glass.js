const express = require("express");
const Glass = require("../database/glass");
const router = express.Router();

router.get("/", async (req, res) => {
  const glasses = await Glass.findAll();
  res.json(glasses);
});

router.post("/", async (req, res) => {
  const glass = await Glass.create(req.body);
  res.json(glass);
});

router.post("/", async function (req, res) {
  const { name, description } = req.body;
  const glass = await Glass.create({
    name,
  });
  res.send(glass);
});

router.put("/:id", async function (req, res) {
  const { name, description } = req.body;
  const glass = await Glass.update(
    {
      name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(glass);
});

router.patch("/:id", async function (req, res) {
  const { name, description } = req.body;
  const glass = await Glass.update(
    {
      name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(glass);
});

router.delete("/:id", async function (req, res) {
 const glass = await Glass.destroy({ where: { id: req.params.id } });
  res.send("success");
});
module.exports = router;