const Todo = require("./Todo.controller");
const express = require("express");
const router = express.Router();

router.get("/get", Todo.Todoget)
router.patch("/patch/:id", Todo.Todopatch)
router.post("/post", Todo.Todopost);
router.delete("/delete/:id", Todo.Tododelete)



module.exports = router;