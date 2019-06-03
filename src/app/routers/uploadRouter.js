const express = require("express");
const imageController = require("../controllers/imageController");

const router = express.Router();

router.post("/newpost", imageController.newPost);

router.get("/listimage", imageController.getPosts);

module.exports = router;
