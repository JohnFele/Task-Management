const { Router } = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const taskController = require("../controllers/tasksController");

const router = Router();

router.post("/", requireAuth, taskController.createTask);
router.get("/", requireAuth, taskController.getAllTasks);
router.get("/:id", requireAuth, taskController.getTaskById);
router.put("/:id", requireAuth, taskController.updateTask);
router.delete("/:id", requireAuth, taskController.deleteTask);

module.exports = router;
