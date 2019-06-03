const upload = require("../../modules/upload");
const Image = require("../models/image");

exports.getPosts = async function(req, res) {
  try {
    const posts = await Image.find().sort("-createdAt");

    return res.status(200).send(posts);
  } catch (err) {
    return res.status(400).send({ error: "Error loading Feed" });
  }
};

exports.newPost = async function(req, res) {
  upload(req, res, err => {
    if (err) {
      console.log(err, "error on Upload");
      return res.status(400).send({ error: "Error loading Feed" });
    } else {
      console.log("file: ", req.file);
      const name = req.file.filename.toString();
      const image = Image.create({ name });
      return res.status(200).send({ image: "success" });
    }
  });
};

module.exports;
