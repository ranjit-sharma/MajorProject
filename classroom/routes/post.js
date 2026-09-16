 const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET for posts");
});

router.get("/:id", (req, res) => {
    res.send("GET for post id");
});

module.exports = router;