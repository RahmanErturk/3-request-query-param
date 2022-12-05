import express from "express"; // ES6 Module

import users from "./users.json" assert { type: "json" }; // ES6 Module

// const express = require("express"); // CommonJS Module
// const users = require("./users.json");

const server = express();

// Aufgabe 1
// server.get("/users", (req, res) => {
//   res.json(users);
// });

// Aufgabe 2
server.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === +id);

  if (user === undefined) {
    return res.json({ status: 404, message: "User not found" });
  }
  res.json(user);
});

// Aufgabe 3
server.get("/users", (req, res) => {
  const user = users.find((elem) => elem.first_name === req.query.name);

  if (user) {
    return res.json(user);
  }

  res.json(users);
});

server.listen(3000, () => {
  console.log("server listening on port :)");
});
