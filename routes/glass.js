/**
 * @swagger
 * components:
 *   schemas:
 *     Glass:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the glass
 *         name:
 *           type: string
 *           description: The name of the glass
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the glass was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the glass was updated
 *       example:
 *         id: 1
 *         name: Highball glass 
 *         createdAt: 2020-03-10T04:05:06.157Z
 *         updatedAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Glasses
 *   description: Glass management API
 * /glasses:
 *   get:
 *     summary: Lists all the glasses
 *     tags: [Glasses]
 *     responses:
 *       200:
 *         description: The list of the glasses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Glass'
 *   post:
 *     summary: Create a new glass
 *     tags: [Glasses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Glass'
 *     responses:
 *       200:
 *         description: The created glass.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Glass'
 *       500:
 *         description: Some server error
 * /glasses/{id}:
 *   get:
 *     summary: Get the glass by id
 *     tags: [Glasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The glass id
 *     responses:
 *       200:
 *         description: The glass response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Glass'
 *       404:
 *         description: The glass was not found
 *   put:
 *    summary: Update the glass by the id
 *    tags: [Glasses]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The glass id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Glass'
 *    responses:
 *      200:
 *        description: The glass was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Glass'
 *      404:
 *        description: The glass was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the glass by id
 *     tags: [Glasses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The glass id
 *
 *     responses:
 *       200:
 *         description: The glass was deleted
 *       404:
 *         description: The glass was not found
 */





const express = require("express");
const { getAllGlasses, updateAllGlasses, updateOneGlass, addOneGlass, deleteOneGlass, getOneGlass } = require("../Controllers/GlassCtrl");
const router = express.Router();

router.get("/", getAllGlasses);

router.post("/", updateAllGlasses);

router.get('/:id', getOneGlass);

router.put("/:id", updateOneGlass);

router.patch("/:id", addOneGlass);

router.delete("/:id", deleteOneGlass);
module.exports = router;