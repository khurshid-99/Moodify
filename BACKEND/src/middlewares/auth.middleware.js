const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");

async function userIdentify(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access token not provided.",
    });
  }

  const isTokenBlacklisting = await blacklistModel.findOne({
    token,
  });

  if (isTokenBlacklisting) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalide Token",
    });
  }
}

module.exports = userIdentify;
