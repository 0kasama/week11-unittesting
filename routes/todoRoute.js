const express = require("express");
const routes = express.Router();
const TodoController = require("../controllers/todoController.js");

routes.get("/", TodoController.getTodo);
routes.get("/:id", TodoController.getTodoById);
routes.post("/", TodoController.postTodo);
routes.put("/:id", TodoController.putTodo);
routes.delete("/:id", TodoController.deleteTodo);

module.exports = routes;
