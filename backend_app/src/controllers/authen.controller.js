const asyncWrapper = require("../middleware/asyncWrapper");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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

  //Check verify
  if (userInfo.isVerify === false) {
    return res.status(401).json({
      error: true,
      message: "User need to verificate account in gmail",
    });
  }

  if (userInfo.email === email && userInfo.password === password) {
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
  const { fullname, email, password } = req.body;

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

  //If success
  const newUser = new User({
    fullname,
    email,
    password,
  });

  await newUser.save();

  // Tạo verification token (chuỗi JWT)
  // Payload is email
  const verificationToken = jwt.sign(
    { email },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );

  console.log(`VerificateToken: ${verificationToken}`);

  // Gửi email xác thực cho người dùng
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Email Verification",
    html: `<p>Click <a href="http://localhost:8080/user/verify-email?token=${verificationToken}">here</a> to verify your email.</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .json({ error: true, message: "Error sending verification email" });
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  //Check access token
  const accessToken = jwt.sign({ newUser }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30m",
  });

  return res.json({
    error: false,
    accessToken,
    user: User,
    message:
      "Registration successful. Please check your email for verification.",
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


