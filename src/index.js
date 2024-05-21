const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasksRoutes");
const errorHandler = require("./middleware/tasksErrorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

mongoose
  .connect('mongodb+srv://user:pass@crudtasks.f6map2j.mongodb.net/CRUD-Tasks?retryWrites=true&w=majority&appName=crudTasks')
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB");
    console.log(error);
  });
