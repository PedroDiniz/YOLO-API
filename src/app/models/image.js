const mongoose = require("../../database");

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
