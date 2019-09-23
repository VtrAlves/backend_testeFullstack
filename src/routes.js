const routes = require('express').Router()
const users  = require('./controllers/controllerUsers')
const products  = require('./controllers/controllerProducts')

//Routes for Users
routes.get('/', users.getAllUsers)
routes.get('/users/:id', users.getUser)
routes.post('/users', users.createUser)
routes.put('/users/:id', users.updateUser)
routes.delete('/users/:id', users.deleteUser)

//Routes for Products
routes.get('/', users.getAllProducts)
routes.get('/products/:id', users.getProduct)
routes.post('/products', users.createProduct)
routes.put('/products/:id', users.updateProduct)
routes.delete('/products/:id', users.deleteProduct)

module.exports = routes