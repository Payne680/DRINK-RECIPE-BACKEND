/**
 * @swagger
 * components:
 *   schemas:
 *     Ingredient:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         ingredient:
 *           type: string
 *           description: The name of the ingredient
 *         description:
 *           type: string
 *           description: Describe your ingredients
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the ingredient was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the ingredient was updated
 *       example:
 *         id: 1
 *         name: El-Vino
 *         description: very good and testful white wine
 *         email_address: payne680@gmail.com
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: Ingredients management API
 * /ingredients:
 *   get:
 *     summary: Lists all the ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: The list of the ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       200:
 *         description: The created ingredient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       500:
 *         description: Some server error
 * /ingredients/{id}:
 *   get:
 *     summary: Get the ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ingredient'
 *       404:
 *         description: The ingredient was not found
 *   put:
 *    summary: Update the ingredient by the id
 *    tags: [Ingredients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ingredient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ingredient'
 *    responses:
 *      200:
 *        description: The ingredient was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingredient'
 *      404:
 *        description: The ingredient was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the ingredient by id
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The ingredient was deleted
 *       404:
 *         description: The ingredient was not found
 */



const express = require("express");
const { getAllIngredients, updateAllIngredients, updateOneIngredient, addOneIngredient, deleteOneIngredient, getOneIngredient } = require("../Controllers/IngredientsCtrl");
const { authMiddleware } = require("../services/auth");
const router = express.Router();

router.get("/", getAllIngredients);

router.post("/", authMiddleware, updateAllIngredients);

router.get('/:id', getOneIngredient);

router.put("/:id", authMiddleware, updateOneIngredient);

router.patch("/:id", authMiddleware, addOneIngredient);

router.delete("/:id", authMiddleware, deleteOneIngredient);
module.exports = router;