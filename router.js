const express = require("express");
const fs = require("fs");
const MaskData = require("maskdata");
const router = express.Router();

const credential = fs.readFileSync("users.json");
const users = JSON.parse(credential);

// masking password
const password = "pL4Y3r";
const maskPasswordOpt = {
  maskWith: "*",
  maxMaskedCharacters: 16,
};
const maskedPassword = MaskData.maskPassword(users.password, maskPasswordOpt);

// login user
router.post("/login", (req, res) => {
  if (req.body.email == users.username && req.body.password == users.password) {
    req.session.user = req.body.email;
    res.redirect("/route/dashboard");
    // res.end("Login Successfull");
  } else {
    res.end("Invalid Username");
  }
});

// route for dashboard
router.get("/dashboard", (req, res) => {
  if (req.session.user) {
    res.status(200);
    res.render("dashboard", { user: req.session.user });
  } else {
    res.send("Unauthorize User");
  }
});

// route for games
router.get("/games", (req, res) => {
  if (req.session.user) {
    res.status(200);
    res.render("games", { user: req.session.user });
  } else {
    res.send("Unauthorize User");
  }
  // res.render("games");
});

// route for api
router.get("/api", (req, res) => {
  res.status(200).send({ username: users.username, password: maskedPassword });
});

module.exports = router;
