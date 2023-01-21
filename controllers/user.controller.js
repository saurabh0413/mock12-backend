const { signupModel, loginModel } = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

mongoose.set("strictQuery", false);
const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.send("something went wrong, please try again later");
    } else {
      const user = new signupModel({
        name: name,
        email: email,
        password: hash,
      });
      await user.save();
      res.send(user);
    }
  });
};

const loginController = async (req, res) => {
  const data = req.body;
  const { email, password } = data;

  const result1 = await signupModel.findOne({ email });

  const hashed_pass = result1.password;

  bcrypt.compare(password, hashed_pass, function (err, result) {
    if (result) {
      const token = jwt.sign({ userId: result1._id }, "abcd1234");
      res.send({ msg: "login success", token: token });
    } else {
      res.send("Login Failed");
    }
  });
};

const getprofile = async (req, res) => {
  const {userId} = req.body
  const data = await signupModel.find({_id:userId})
  res.send(data)
};



module.exports = { signupController, loginController ,getprofile};
