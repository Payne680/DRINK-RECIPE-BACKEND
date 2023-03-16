const User = require('../database/user');
const Drink = require("../database/drink");
const bcrypt = require("bcrypt");
const uuid = require("uuid");


const getAllUsers = async function (req, res) {
    const users = await User.findAll({ include: Drink })
    res.send(users);
}

const updateUsers = async function (req, res) {
    const { first_name, last_name, email_address, phone, password } = req.body;
    bcrypt.hash(password, 5, async function (err, hash) {
        if (err) res.status(500).send(err)
        else {
            const user = await User.create({
                first_name,
                last_name,
                email_address,
                phone,
                password: hash,
                api_key: uuid.v4(),
                is_admin: false,
            })
            res.send(user)
        }
    })
}

const getOneUser = async function (req, res) {
    const user = await User.findByPk(req.params.id)
    res.send(user);
}

const updateOneUser = async function (req, res) {
    const { first_name, last_name, email_address, phone, password } = req.body;
    const user = await User.update({
        first_name,
        last_name,
        email_address,
        phone,
        password,
    }, {
        where: {
            id: req.params.id
        }
    });
    res.send(user);
}

const addOneUser = async function (req, res) {
    const { first_name, last_name, email_address, phone, password } = req.body;
    const user = await User.update({
        first_name,
        last_name,
        email_address,
        phone,
        password,
    }, {
        where: {
            id: req.params.id
        }
    });
    res.send(user);
}

const deleteOneUser = async function (req, res) {
    await User.destroy({
        where: {
            id: req.params.id,
        }
    })
    res.json("status: success");
}

module.exports = {
    getAllUsers,
    updateUsers,
    getOneUser,
    addOneUser,
    updateOneUser,
    deleteOneUser,
}