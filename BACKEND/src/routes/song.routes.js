const { Router } = require("express");
const upload = require("../middlewares/upload.middleware");
const {
  songCreateController,
  getSongController,
} = require("../controllers/song.controller");
const userIdentify = require("../middlewares/auth.middleware");

const songRouter = Router();

songRouter.post("/", userIdentify, upload.single("song"), songCreateController);
songRouter.get("/", userIdentify, getSongController);

module.exports = songRouter;
