const jwt = require("jsonwebtoken");
const secret = "cvjhhhhhjlkyxcgvgfxdfcvg";

function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json("Unauthorized");
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) throw err;
    req.user = decoded;
    next();
  });
}

module.exports = authMiddleware;
