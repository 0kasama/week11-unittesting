const { todo } = require("../models");

class todoController {
  static async getTodo(req, res, next) {
    try {
      const data = await todo.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getTodoById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await todo.findOne({ where: { id } });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async postTodo(req, res, next) {
    try {
      console.log(req.body);
      const { task } = req.body;
      const data = await todo.create({ task });
      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async putTodo(req, res, next) {
    const { id } = req.params;
    const { task } = req.body;
    try {
      const [rowsUpdated, [updatedTodo]] = await todo.update(
        { task },
        { where: { id }, returning: true }
      );
      res.status(200).json(updatedTodo);
    } catch (err) {
      next(err);
    }
  }

  static async deleteTodo(req, res, next) {
    const { id } = req.params;
    try {
      const deletedRowCount = await todo.destroy({ where: { id } });
      if (deletedRowCount === 0) {
        const notFoundErr = new Error("Todo not found");
        notFoundErr.name = "NotFound";
        throw notFoundErr;
      }
      res.status(200).json({ message: "Todo Deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = todoController;
