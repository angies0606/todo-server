require('dotenv').config()
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
// const router = jsonServer.router({
//   todos: [],
//   'todo-lists': []
// })
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// // To handle POST, PUT and PATCH you need to use a body-parser
// // You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now()
//   }
//   // Continue to JSON Server router
//   next()
// })

// Use default router
server.use(router)
const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log('JSON Server is running on port:', PORT)
})
