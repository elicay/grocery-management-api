const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

let groceryData = [];
let CartData = [];

app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
  res.send({ health: 'ok' });
});

app.get('/grocery', (req, res) => {
  res.send(groceryData);
});

app.post('/grocery', (req, res) => {
  groceryData.push(req.body);
  res.send({ data: req.body });
});

app.delete('/grocery', (req, res) => {
  groceryData = groceryData.filter((item) => item.id != req.query.id);
  res.send({ data: req.body });
});

app.get('/cart', (req, res) => {
  res.send(CartData);
});

app.post('/cart', (req, res) => {
  CartData.push(req.body);
  res.send({ data: req.body });
});

app.delete('/cart', (req, res) => {
  CartData = CartData.filter((item) => item.id != req.query.id);
  res.send({ data: req.body });
});

app.listen(port, '192.168.1.2', () => {
  console.log(`Server is running on port ${port}`);
});
