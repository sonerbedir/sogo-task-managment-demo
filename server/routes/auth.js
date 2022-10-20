import express from "express";
import User from "../models/User.js";
import Joi from "@hapi/joi";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerSchema = Joi.object({
  name: Joi.string().required().min(3).max(255),
  email: Joi.string().required().email().min(3).max(255),
  password: Joi.string().required().min(6).max(255),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const router = express.Router();

router.post("/register", function (req, res) {
  const { error } = registerSchema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  const user = new User({ ...req.body, password: hash });

  user
    .save()
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, "as3rteyc");
      res.header("Authorization", token).json({ accessToken: token });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/login", function (req, res) {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({ email, password });

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(400).send("Invalid email or password");
        return;
      }

      const isValid = bcrypt.compareSync(password, user.password);

      if (!isValid) {
        res.status(400).send("Invalid email or password");
        return;
      }

      const token = jwt.sign({ _id: user._id }, "as3rteyc");

      res.header("Authorization", token).json({ accessToken: token });
    })
    .catch(() => {
      res.status(400).send("Invalid email or password");
    });
});

export default router;
