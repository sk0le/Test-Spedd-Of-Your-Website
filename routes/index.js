const express = require("express");
const axios = require("axios").default;
const router = express.Router();

router.get("", (req, res) => {
  res.render("index");
});
router.post("", (req, res, next) => {
  const { url } = req.body;

  let errors = [];

  if (!url) {
    errors.push({ msg: "Please enter all fields" });
  }

  if (errors.length > 0) {
    res.render("index", {
      errors,
      url,
    });
  } else {
    const start = Date.now();
    axios
      .get(url)
      .then((response) => {
        let realTime = Date.now() - start; // calculate time difference
        res.render("index", {
          realTime,
        });
      })
      .catch((err) => {
        const test = "hello";
        res.render("index", {
          test,
        });
      });
  }
});

module.exports = router;
