const express = require("express");

const router = express.Router();
// const{home, register}=require("../controllers/auth-controller");
// const register = require("../controllers/auth-controller");
const authcontroler= require("../controllers/auth-controller");
const validate = require("../middlewares/validate_middleware");
const {signupSchema, loginSchema} = require("../validators/auth_validator");
const authMiddleware = require("../middlewares/auth-middleware");


router.route("/").get(authcontroler.home);

router.route("/register")
.post(validate(signupSchema),authcontroler.register);

router.route("/login")
.post(validate(loginSchema),authcontroler.login);

router.route("/login").post(authcontroler.login);

router.route("/user").get(authMiddleware,authcontroler.user);






module.exports= router;