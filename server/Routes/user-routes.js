const express = require("express");
const {
  login,
  HelloWorld
} = require("../Controllers/user-controller");
const { loginValidation } = require("../middleware/validation");
// const validateUserToken = require("../middleware/userToken");
const router = express.Router();

router.post("/login", loginValidation,login);
router.get("/hello", HelloWorld);

module.exports = router;