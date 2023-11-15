const express = require("express");
const cors = require("cors");
const app = express();
const Product = require("./Product");
const fool = require("./Fool");
const tamia = require("./Tamia");
const frenshFries = require("./FrenshFries");
const Chease = require("./Chease");
const Eggs = require("./Eggs");
const Sweet = require("./Sweet");
 
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

app.get("/product", (req, res) => {
  res.send(Product);
});
app.get("/fool", (req, res) => {
  res.send(fool);
});
 
app.get("/tamia", (req, res) => {
  res.send(tamia);
});
 
app.get("/frenshFries", (req, res) => {
  res.send(frenshFries);
});
app.get("/chease", (req, res) => {
  res.send(Chease);
});
 
app.get("/egg", (req, res) => {
  res.send(Eggs);
});
app.get("/sweet", (req, res) => {
  res.send(Sweet);
});
 
 
 
 

app.get("/product/:id", (req, res) => {
  const oneProduct = products.find((item) => {
    return item.id == req.params.id;
  });

  res.send(oneProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`http://localhost:${port}`));
