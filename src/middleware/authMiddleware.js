const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { config } = require("../config/config");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { requireAuth };
