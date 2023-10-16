const cors = require("cors");

const corsMiddleware = cors({
  credentials: true,
  origin: "http://localhost:3000",
});

module.exports = corsMiddleware;