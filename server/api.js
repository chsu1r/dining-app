const express = require("express");
const raw_sample_json = require('./sample-menu.json');

// models here
// models here

const router = express.Router();

// all paths are preceded with /api/ (so like /api/meals)
router.get("/meals", (req, res) => {
    res.send(raw_sample_json);
});

module.exports = router;