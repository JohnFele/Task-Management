const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasksRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth } = require("./middleware/authMiddleware");
const { DB_URL } = require("./config/config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: " + error.message);
  });

app.use("/", authRoutes);
app.use("/tasks", requireAuth, taskRoutes);
