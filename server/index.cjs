const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");
const UserModel = require("./User.cjs");

app.use(cors());
app.use(express.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://husna:husna@cluster0.s8b8r.mongodb.net/expressdb?retryWrites=true&w=majority&appName=Cluster0",
    {}
  );
  console.log("Connected to MongoDB");
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
app.post("/users/create", (req, res) => {
  console.log("Creating user with data:", req.body);
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(port, () => {
  console.log("app is running");
});
