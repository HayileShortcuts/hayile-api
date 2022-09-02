const router = require("express").Router();
const controller = require("./shortcuts.controller");

router.get("/:id", controller.getEnvironment);
// router.post('/', controller.post)

module.exports = router;
