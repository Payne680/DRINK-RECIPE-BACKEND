const Glass = require("../database/glass");

const getAllGlasses = async (req, res) => {
    const glasses = await Glass.findAll();
    res.json(glasses);
  }

  const updateAllGlasses =async function (req, res) {
    const { name } = req.body;
    const glass = await Glass.create({
      name,
    });
    res.send(glass);
  }

const updateOneGlass = async function (req, res) {
    const { name } = req.body;
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
  }

  const getOneGlass =  async function (req, res) {
    const user = await Glass.findByPk(req.params.id)
    res.send(user);
}


  const addOneGlass = async function (req, res) {
    const { name, description } = req.body;
    const glass = await Glass.update(
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
    res.send(glass);
  }

  const deleteOneGlass = async function (req, res) {
    const glass = await Glass.destroy({ where: { id: req.params.id } });
     res.send("success");
   }

  module.exports = {
    getAllGlasses,
    updateAllGlasses,
    updateOneGlass,
    addOneGlass,
    deleteOneGlass,
    getOneGlass,
  }