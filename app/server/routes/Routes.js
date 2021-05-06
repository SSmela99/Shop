/* eslint-env node */
const express = require("express");
const router = express.Router();
const newUserTemplate = require("../models/RegistrationSchema");

router.post("/account/register", (req, res) => {
  const newUser = new newUserTemplate({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/account/login", async (req, res) => {
  console.log("logowanie..");

  const { body } = req;
  const { username, password } = body;

  if (!username || !password) {
    return res.send({
      info: {
        success: false,
        message: "Błąd: wiersze nie mogą być puste!",
      },
    });
  } else {
    await newUserTemplate.findOne(
      {
        username: username,
        password: password,
      },
      (err, user) => {
        if (err) {
          console.log(err);
        } else if (!user) {
          console.log("Nie istnieje taki użytkownik!");
          return res.status(200).json({
            info: {
              success: false,
              message: "Nie istnieje taki użytkownik!",
            },
          });
        } else {
          console.log(`Zalogowałeś się, ${user.username}`);
          return res.status(200).json({
            user,
            info: {
              success: true,
              message: `Zalogowałeś się, ${user.username}`,
            },
          });
        }
      }
    );
  }
});

module.exports = router;
