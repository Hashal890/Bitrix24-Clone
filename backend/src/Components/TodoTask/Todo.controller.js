const Todo = require("./Todo.model");
//deployment done
// GET REQUEST FOR TODO
exports.Todoget = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  try {
    const getTotalLength = await Todo.find({});
    const todos = await Todo.find({})
      .skip(limit * (page - 1))
      .limit(limit);
    try {
      res.status(200).json({
        message: "Get All Todos successfully",
        todos: todos,
        totalPages: getTotalLength.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST REQUEST FOR TODOS
exports.Todopost = async (req, res) => {
  const newTodo = new Todo(req.body);

  await newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: "Create a new Todo successfuly",
      });
    }
  });
};

// DELETE REQUEST FOR TODOS
exports.Tododelete = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId);
    if (!todo) {
      return res.status(404).json({ message: `No todo with id: ${todoId}` });
    } else {
      res.status(200).json({
        message: `Todo with id : ${todoId} deleted successfully`,
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH REQUEST FOR TODOS
exports.Todopatch = async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({ message: `No Todo with id: ${todoId}` });
    } else {
      res.status(200).json({
        message: `Todo with id: ${todoId} updated successfully`,
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
