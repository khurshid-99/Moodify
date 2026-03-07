const ImageKit = require("@imagekit/nodejs").default;
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async ({ buffer, fileName, folderName }) => {
  const file= await client.files.upload({
    file: await ImageKit.toFile(Buffer.from(buffer)),
    fileName: fileName,
    folder: folderName,
  });

  return file
};

module.exports = uploadFile;
