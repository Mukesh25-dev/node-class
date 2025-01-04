const express = require("express");
const logger = require("./logger");
const errorPage = require("./errorPage");

const app = express();

app.use(logger);

app.get("/", (request, response) => {
  response.json({ message: "Get/" });
});

app.post("/", (request, response) => {
  response.json({ message: "Post" });
});

app.patch("/", (request, response) => {
  response.json({ message: "Patch" });
});

app.put("/", (request, response) => {
  response.json({ message: "Put" });
});

app.delete("/", (request, response) => {
  response.json({ message: "Delete" });
});

app.get("/posts", (request, response) => {
  response.json({ message: "Get posts" });
});

app.use(errorPage);

module.exports = app;
