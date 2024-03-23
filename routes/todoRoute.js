const express = require("express");
const routes = express.Router();
const todoController = require("../controllers/todoController.js");

routes.get("/", todoController.getTodo);
routes.get("/:id", todoController.getTodoById);
routes.post("/", todoController.postTodo);
routes.put("/:id", todoController.putTodo);
routes.delete("/:id", todoController.deleteTodo);

module.exports = routes;
