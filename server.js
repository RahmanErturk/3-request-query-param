const express = require("express");
const users = require("./users.json");

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
  const user = users.find((user) => user.first_name === req.query.username);
  console.log(user);

  if (user === undefined) {
    return res.json({ status: 404, message: "User not found" });
  }
  res.json(user);
});

server.listen(3000, () => {
  console.log("server listening on port :)");
});
