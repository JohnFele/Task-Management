const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const taskController = require("../controllers/tasksController");

const router = Router();

router.post("/create", requireAuth, taskController.createTask);
router.get("/", requireAuth, taskController.getAllTasks);
router.get("/:id", requireAuth, taskController.getTaskById);
router.put("/update/:id", requireAuth, taskController.updateTask);
router.delete("/delete/:id", requireAuth, taskController.deleteTask);

module.exports = router;
