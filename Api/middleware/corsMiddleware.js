const cors = require("cors");

const corsMiddleware = cors({
  credentials: true,
  origin: ["https://santmagazine.netlify.app"],
});

module.exports = corsMiddleware;