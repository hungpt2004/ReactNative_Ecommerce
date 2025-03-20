const asyncWrapper = require("../middleware/asyncWrapper");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
require("dotenv").config();

exports.signInWithEmailAndPassword = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "Username is required" });
  }
  if (!password) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "User is not found" });
  }

  if (userInfo.email === email && bcrypt.compare(userInfo.password, password)) {
    const user = { user: userInfo };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "36000m",
    });

    return res.json({
      error: false,
      message: "Login Successfully",
      user,
      accessToken,
    });

  } else {

    return res.status(400).json({ message: "Login failed" });

  }
});

exports.createUser = asyncWrapper(async (req, res) => {

  const { fullname, email, password, phone, address} = req.body;

  if (!fullname) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "Fullname is required" });
  }
  if (!email) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "Email is required" });
  }
  if (!password) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "Password is required" });
  }

  //Check user
  const isExistedUser = await User.findOne({ email: email });

  if (isExistedUser) {
    return res //Trả về res status 400 là dòng error mà msg
      .status(400)
      .json({ error: true, message: "User is already existed" });
  }

  const hashedPasword = await bcrypt.hash(password, 10);

  //If success
  const newUser = new User({
    fullname,
    email,
    password: hashedPasword,
    phone,
    address
  });

  await newUser.save();

  return res.json({
    error: false,
    user: User,
    message:
      "Registration successful ! Sign in now",
  });
});

exports.verifyEmail = asyncWrapper(async (req, res) => {
  const { token } = req.query;

  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const { email } = decoded;

    console.log(email);

    //Thay đổi trạng thái của Account
    const updateUserAfterVerify = await User.findOneAndUpdate(
      { email: email },
      { $set: { isVerify: true } },
      { new: true }
    );

    updateUserAfterVerify.save();

    //Chuyển hướng đến trang login
    return res.status(200).redirect("http://localhost:3000/");
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: "Verify is failed",
    });
  }
});

exports.forgotPassword = asyncWrapper (async(req,res) => {
})

exports.changePassword = asyncWrapper(async(req, res) => {
})


