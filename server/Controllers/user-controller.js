const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const saltRounds = 10;

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {}

  if (!existingUser) {
    try {
      const newUser = new User({
        email: email,
        password: bcrypt.hashSync(password, saltRounds),
      });
      await newUser.save();

      existingUser = newUser;
    } catch (err) {
      console.error("Error during user creation:", err);
      return res.status(500).json({ message: "Server error" });
    }
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Email/Password" });
  }

  const reps = {
    id: existingUser._id,
    email: existingUser.email,
    accountType: "user",
  };

  const token = jwt.sign(reps, process.env.JWT_SECRET_KEY);

  return res.status(200).json({
    message: "Successfully Logged In",
    token,
    email: existingUser.email,
    uid: existingUser._id,
  });
};

const HelloWorld = async (req, res) => {
  res.send("helllo");
};

exports.login = login;
exports.HelloWorld = HelloWorld;
