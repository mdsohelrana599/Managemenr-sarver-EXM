const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("users sarver is avilable");
});

const usres = [
  { id: 1, name: "sohel", email: "sohel@gmail.com" },
  { id: 2, name: "tuser", email: "tuser@gmail.com" },
  { id: 3, name: "shwon", email: "shwon@gmail.com" },
  { id: 4, name: "nahid", email: "nahid@gmail.com" },
  { id: 5, name: "raju", email: "raju@gmail.com" },
  { id: 6, name: "masud", email: "masud@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(usres);
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
