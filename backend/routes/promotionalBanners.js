const express = require("express");
const router = express.Router();

const promotionalBanners = require("../data/promotionalBanners.json");

router.get("/", (req, res) => {
  res.json(promotionalBanners);
});

module.exports = router;