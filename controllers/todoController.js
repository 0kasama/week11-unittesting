const { Todo } = require("../models/todoModel.js");

class todoController {
  static async getTodo(req, res, next) {
    try {
      const data = await Todo.getTodo(next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getTodoById(req, res, next) {
    try {
      const { id } = req.params;

      const data = await Todo.getTodoById(id, next);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postTodo(req, res, next) {
    try {
      const { task, dueDate } = req.body;

      const data = await Todo.postTodo(req.body, next);
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async putTodo(req, res, next) {
    const { id } = req.params;
    const { task, dueDate } = req.body;
    try {
      const data = await Todo.putTodo(req.body, req.params, next);
      res.status(200).json({ message: "Todo Updated" });
    } catch (err) {
      next(err);
    }
  }

  static async deleteTodo(req, res, next) {
    const { id } = req.params;
    try {
      const data = await Todo.deleteTodo(id, next);
      res.status(200).json({ message: "Todo Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = todoController;
