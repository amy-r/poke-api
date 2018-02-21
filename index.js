const path = require('path')
const express = require('express')
const cors = require('express-cors')
const bodyParser = require('body-parser')
const request = require('request')

const port = process.env.port || 3001

const types = require('./types')

const app = express()

app.use(
  cors({
    allowedOrigins: ['localhost:3000']
  })
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.status(200).send('hello world')
})

app.get('/types', function(request, response) {
  response.status(200).send(types)
})

app.get('/types/:id', function(request, response) {
  var found = types.find(function(type) {
    return type.id === request.params.id
  })
  response.status(200).send(found)
})

app.listen(port)
