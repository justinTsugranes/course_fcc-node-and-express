const express = require('express')
const app = express()
const port = 5000
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// MIDDLEWARE
// app.use invokes for everything that follows
// you can specify a base path (ie app.use('/api', logger)) that the middleware will use. otherwise, it will apply to everything
app.use([logger, authorize])

// ROUTE METHODS
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/api/products', (req, res) => {
  res.send('Products Page')
})
app.get('/api/reviews', (req, res) => {
  res.send('Reviews Page')
})

// SERVER
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
