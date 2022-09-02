const ShortcutModel = require("./shortcut.model");

// Obtener un usuario por su ID
async function getEnvironment(req, res) {
  try {
    ShortcutModel.findOne({ name: req.params.id }).then((result) =>
      res.status(200).send(result.program),
    );
  } catch (error) {
    res.status(500).send(err);
  }
}

// async function post(req, res) {
//   try {
//     const { name } = req.body;
//     const response = await ShortcutModel.create({ name });
//     res.status(200).send({ response });
//   } catch (error) {}
// }
module.exports = { getEnvironment };
