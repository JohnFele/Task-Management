const jwt = require("jsonwebtoken");
const config = require("../config/config");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.redirect("/login");
      } else {
        // req.user = decodedToken.id;
        next();
      }
    });
  } else {
    res.redirect("/login");
  }
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, config.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err)
        // res.local.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        // res.local.user = user;
        next();
      }
    });
  } else {
    // res.local.user = null;
    next();
  }
}

module.exports = { requireAuth, checkUser };
