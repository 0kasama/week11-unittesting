require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});

module.exports = { app, server };
