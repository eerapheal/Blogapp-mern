const multer = require("multer");

const uploadMiddleware = multer({ dest: "uploads/" });

module.exports = uploadMiddleware;