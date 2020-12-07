const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({
    list: [
      {
        id: 1,
        name: "鞋子",
        price: 99.99,
      },
    ],
  });
});

module.exports = router;
