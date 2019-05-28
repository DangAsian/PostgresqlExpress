const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");

//Get a user
router.get("/", (req, res) => {
  User.findAll()
    .then(users => {
      res.render('users', {
        users
      })
    })
    .catch(err => console.log(err));
});

//Add a user
router.get('/add', (req, res) => {
  const data = {
    name: "Toby",
    email: "Toby@gmail.com",
    technologies: "Something",
    "budget": "400"
  }

  let { name, email, technologies, budget } = data;

  User.create({
    name,
    email,
    technologies,
    budget
  })
    .then(user => res.redirect('/'))
    .catch(err => {
      console.log(err)
      res.status(500).send('Server Errro')
    })
})

module.exports = router;
