const userModel = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
const redis = require("../configs/cache");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: `User already exist with this ${email} and ${username} `,
    });
  }

  const hasPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    username,
    email,
    password: hasPassword,
  });

  const token = jwt.sign(
    {
      id: newUser._id,
      username: newUser.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "5d" },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User register successfully.",
    user: {
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel
    .findOne({
      $or: [{ email }, { username }],
    })
    .select("+password");

  if (!user) {
    return res.status(400).json({
      message: `Invalid credentials`,
    });
  }

  const isMatchPassword = bcrypt.compare(password, user.password);

  if (!isMatchPassword) {
    return res.status(401).json({
      message: "Invalid credentials.",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "5d" },
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "User logged in successfully.",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function getMeController(req, res) {
  const { id } = req.user;

  const user = await userModel.findById(id);

  return res.status(200).json({
    message: "User fetched successfully.",
    user,
  });
}

async function logoutControler(req, res) {
  const { token } = req.cookies;

  res.clearCookie("token");

  await redis.set(token, Date.now().toString(), "EX", 60 * 60 * 24);

  // const loggedOut = await blacklistModel.create({
  //   token,
  // });

  return res.status(201).json({
    message: "User logged out successfully.",
    // loggedOut,
  });
}

module.exports = {
  registerController,
  loginController,
  getMeController,
  logoutControler,
};
