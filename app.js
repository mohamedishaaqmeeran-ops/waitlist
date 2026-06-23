const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const connectDB = require("./config/db");
const swaggerSpec = require("./swagger/swagger");
const waitlistRoutes = require("./routes/waitlistRoutes");

const app = express();

connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "https://twinn.live",
  "https://www.twinn.live",
  "https://ai-twin-63zh.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", waitlistRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("AI Twin Backend Running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});