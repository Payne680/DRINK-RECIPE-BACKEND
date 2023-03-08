const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../database/user");
const { signToken } = require("../services/jwt");
const { authMiddleware } = require("../services/auth");
const sequelize = require("../database");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
sequelize.sync();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { email_address: username } });
  if (!user) {
    return res.sendStatus(401);
  }

  bcrypt.compare(password, user.password, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    }

    if (result) {
      const token = signToken({id: user.id, email: user.email_address})
      res.send({user, token});
    } else {
      return res.sendStatus(401);
    }
  });
});

router.get("/current-user", authMiddleware, (req, res) => {
  res.send(req.user);
});

module.exports = router;
