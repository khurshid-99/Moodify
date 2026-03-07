const songModle = require("../models/song.model");
const id3 = require("node-id3");
const uploadFile = require("../services/storage.service");

async function songCreateController(req, res) {
  const file = req.file;
  // console.log(file);
  const { mood } = req.body;

  const tags = id3.read(file.buffer);
  // console.log(tags);

  // const songFile = await uploadFile({
  //   buffer: file.buffer,
  //   fileName: tags.title + ".mp3",
  //   folderName: "cohort-2/moodify/songs",
  // });

  // console.log(songFile)

  // const posterFile = await uploadFile({
  //   buffer: tags.image.imageBuffer,
  //   fileName: tags.title + ".jpeg",
  //   folderName: "cohort-2/moodify/posters",
  // });

  const [songFile, posterFile] = await Promise.all([
    uploadFile({
      buffer: file.buffer,
      fileName: tags.title + ".mp3",
      folderName: "cohort-2/moodify/songs",
    }),

    uploadFile({
      buffer: tags.image.imageBuffer,
      fileName: tags.title + ".jpeg",
      folderName: "cohort-2/moodify/posters",
    }),
  ]);

  const song = await songModle.create({
    url: songFile.url,
    posterUrl: posterFile.url,
    title: tags.title,
    mood,
  });

  return res.status(201).json({
    message: "Song Uploded successfully",
    song,
  });
}

async function getSongController(req, res) {
  const { mood } = req.query;

  const song = await songModle.findOne({
    mood,
  });

  return res.status(200).json({
    message: "Song fetched successfully",
    song,
  });
}

module.exports = { songCreateController, getSongController };
