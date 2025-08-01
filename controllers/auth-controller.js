const e = require("express");
const User = require("../models/user_modele");
// const user = require("../models/user_modele");
const bcrypt = require("bcrypt");
const home = async (req, res) => {
  try {
    res
      .status(200)
      .send("this is our home page");
  } catch (error) {
    console.log(error);
  }
}

const register = async (req, res) => {
  try { 

    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }
    const userCreated = await User.create({ username, email, phone, password })

    res.status(201).json({
      message: "registation sucessfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });

  } catch (error) {
    console.log(error);
    res.status(500).json("internal serever error")
  }
}

// user login


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);

    if (!userExist) {
      return res.status(400).json({ message: "Invalid credential  " });
    }

    //   const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).json("internal server error");
    next(error);
  }
};



// to send user data user logic 

const user = async(req, res) =>{
  try {
    const userData = req.user; 
    console.log(userData);    
   
    return res.status(200).json({userData})
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }

}
module.exports = { home, register, login , user}
