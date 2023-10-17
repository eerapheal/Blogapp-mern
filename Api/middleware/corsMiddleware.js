const cors = require("cors");

const corsMiddleware = cors({
  credentials: true,
  origin: ["http://localhost:3000", "https://santmagazine.netlify.app"],
});

module.exports = corsMiddleware;