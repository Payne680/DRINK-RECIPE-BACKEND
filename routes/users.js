/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email_address
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         first_name:
 *           type: string
 *           description: The firstName of the user
 *         last_name:
 *           type: string
 *           description: The lasttName of the user
 *         email_address:
 *           type: string
 *           description: The password of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         is_admin:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the book was updated
 *       example:
 *         id: 1
 *         first_name: Rash
 *         last_name: Lahfen
 *         email_address: rash237@gmail.com
 *         is_admin: false
 *         password: rashking
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */




/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 *
 */




const express = require('express');

const { getAllUsers, updateUsers, getOneUser, addOneUser, updateOneUser, deleteOneUser } = require('../Controllers/UsersCtrl');


var router = express.Router();

/* GET users listing. */
router.get('/', getAllUsers);

router.post('/', updateUsers);

router.get('/:id', getOneUser);

router.put("/:id", addOneUser);

router.patch("/:id", updateOneUser);

router.delete('/:id', deleteOneUser);

module.exports = router;
