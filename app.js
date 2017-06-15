const express = require('express')

// Create new express app
const app = express()

// Start with 7000
app.listen(7000, () => {
  console.log('Server started at localhost:7000');
})