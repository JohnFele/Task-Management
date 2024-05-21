const { Router } = require("express");
const taskController = require("../controllers/tasksController");

const router = Router();

router.post("/create", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.put("/update/:id", taskController.updateTask);
router.delete("/delete/:id", taskController.deleteTask);

module.exports = router;
