/**
 * @swagger
 * components:
 *   schemas:
 *     Drink:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the drink
 *         name:
 *           type: string
 *           description: The name of the drink
 *         description:
 *           type: string
 *           description: The description of the drink
 *         imageUrl:
 *           type: string
 *           description: The the imageUrl of the image
 *         recipe:
 *           type: string
 *           description: The recipe of the drink
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the drink was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the drink was updated
 *       example:
 *         id: 1
 *         name: Red Lable
 *         description: quality whiskey
 *         imageUrl: kuuhfkchkujuu88rmm.com
 *         recipe: racins
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Drinks
 *   description: Drinks management API
 * /drinks:
 *   get:
 *     summary: Lists all the drinks
 *     tags: [Drinks]
 *     responses:
 *       200:
 *         description: The list of the drinks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Drink'
 *   post:
 *     summary: Create a new drink
 *     tags: [Drinks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Drink'
 *     responses:
 *       200:
 *         description: The created drink.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       500:
 *         description: Some server error
 * /drinks/{id}:
 *   get:
 *     summary: Get the drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *     responses:
 *       200:
 *         description: The drink response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Drink'
 *       404:
 *         description: The drink was not found
 *   put:
 *    summary: Update the drink by the id
 *    tags: [Drinks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The drink id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Drink'
 *    responses:
 *      200:
 *        description: The drink was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Drink'
 *      404:
 *        description: The drink was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the drink by id
 *     tags: [Drinks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The drink id
 *
 *     responses:
 *       200:
 *         description: The drink was deleted
 *       404:
 *         description: The drink was not found
 */




const express = require("express");
const { getAllDrinks, updateAllDrinks, getOneDrink, updateOneDrink, addOneDrink, deleteOneDrink } = require("../Controllers/DrinkCtrl");
const { authMiddleware } = require("../services/auth");
const router = express.Router();
router.get("/", getAllDrinks);

router.post("/", authMiddleware, updateAllDrinks);

router.get('/:id', getOneDrink);

router.put("/:id", authMiddleware, updateOneDrink);
router.patch("/:id", authMiddleware, addOneDrink);
router.delete("/:id", authMiddleware, deleteOneDrink);
module.exports = router;