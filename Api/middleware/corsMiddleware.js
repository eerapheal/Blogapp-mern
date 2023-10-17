const cors = require("cors");

const corsMiddleware = cors({
  credentials: true,
  origin: "*",
});

module.exports = corsMiddleware;