const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
  console.log('request even')
  res.end('hello world')
})

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})

// const http = require('http')

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page')
//   }
//   if (req.url === '/about') {
//     res.end('About Page')
//   }
//   res.end('Error')
// })

// server.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })
