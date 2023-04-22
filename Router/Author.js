const express = require("express");
const router = express.Router();
const authorController = require("../Controller/Author");

router.get("/", Author.getAuthors);

router.post("/", Author.postAuthors);

module.exports = router;