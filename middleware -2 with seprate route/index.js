const express = require('express');
const app = express();

// Route with Route Parameter (Param)
app.get('/products/:id', (req, res) => {
  const productId = req.params.id; // Accessing route parameter
  res.send(`Product ID: ${productId}`);
});

// Route with Query Parameters
app.get('/search', (req, res) => {
  const category = req.query.category; // Accessing query parameter
  const sort = req.query.sort; // Accessing query parameter
  res.send(`Category: ${category}, Sort by: ${sort}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

