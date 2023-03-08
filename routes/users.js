const express = require('express');
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const User = require('../database/user');
const { SALT_ROUNDS } = require("../services/constants");
const { authMiddleware } = require("../services/auth");

var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res) {
  const users = await User.findAll()
  res.send(users);
});

router.post('/', async function (req, res) {
  const { first_name, last_name, email_address, phone, password } =req.body;
  const user = await User.create({
    first_name,
    last_name,
    email_address,
    phone,
    password,
    apiKey: Date.now()
  })
  res.send(user)
});

router.get('/:id', async function (req, res) {
  const user = await User.findByPk(req.params.id)
  res.send(user);
});

router.put("/:id", async function (req, res) {
  const { first_name, last_name, email_address, phone, password } =req.body;
  const user = await User.update({
    first_name,
    last_name,
    email_address,
    phone,
    password,
  },{
    where:{
      id:req.params.id
    }
  });
  res.send(user);
});

router.patch("/:id", async function (req, res) {
  const { first_name, last_name, email_address, phone, password } =req.body;
  const user = await User.update({
    first_name,
    last_name,
    email_address,
    phone,
    password,
  },{
    where:{
      id:req.params.id
    }
  });
  res.send(user);
});

router.delete('/:id', async function (req, res) {
   await User.destroy({
    where: {
      id: req.params.id,
    }
  })
  res.send("status: success");
});

module.exports = router;
