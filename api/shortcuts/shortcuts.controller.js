const ShortcutModel = require("./shortcut.model");

getEnvironment = async (req, res) => {
  try {
    const shortcut = await ShortcutModel.findOne({ name: req.params.id });
    res.status(200).send(shortcut.program);
    } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = { getEnvironment };
