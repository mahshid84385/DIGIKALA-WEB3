const express = require("express");
const router = express.Router();

const brands = require("../data/brands.json");

router.get("/", (req, res) => {
  res.json({
    brands
  });
});

module.exports = router;