const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

router.get("/", (req, res) => {
  User.findAll()
    .then(users => {
      console.log("All users:", JSON.stringify(users, null, 4))
      res.status(200).send('Yay');
    })
    .catch(err => console.log(err));
});

module.exports = router;
