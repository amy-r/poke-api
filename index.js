const path = require('path')
const express = require('express')
const cors = require('express-cors')
const bodyParser = require('body-parser')
const request = require('request')

const port = process.env.port || 3001

const types = require('./types')
const pokemon = require('./pokemon')

const app = express()

app.use(
  cors({
    allowedOrigins: ['localhost:3000']
  })
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.status(200).send('Hello pokemon!')
})

app.get('/types', function(request, response) {
  response.status(200).send(types)
})

app.get('/types/:id', function(request, response) {
  var found = types.find(function(type) {
    return type.id === request.params.id
  })

  if(found) {
    response.status(200).send(found)
  } else {
    response.status(404).send('Not found')
  }
})

app.get('/pokemon', function(request, response) {
  response.status(200).send(pokemon)
})

app.get('/pokemon/:id', function(request, response) {
  var found = pokemon.find(function(poke) {
    return poke.id === request.params.id
  })

  if(found) {
    response.status(200).send(found)
  } else {
    response.status(404).send('Not found')
  }
})

app.listen(port)
