const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasksRoutes");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");
const config = require("./config/config");
// const errorHandler = require("./middleware/tasksErrorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
  .connect(
    `mongodb+srv://${config.USER}:${config.PASSWORD}@crudtasks.f6map2j.mongodb.net/CRUD-Tasks`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: " + error.message);
  });

app.use("*", checkUser);
app.use("/", authRoutes);
app.use("/tasks", requireAuth, taskRoutes);
// app.use(errorHandler);
