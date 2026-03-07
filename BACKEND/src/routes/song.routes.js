const { Router } = require("express");
const upload = require("../middlewares/upload.middleware");
const { songCreateController } = require("../controllers/song.controller");

const songRouter = Router();

songRouter.post("/", upload.single("song"), songCreateController)

module.exports = songRouter;
