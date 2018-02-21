import express from 'express'
import cors from 'express-cors'
import bodyParser from 'body-parser'
import request from 'request'

const port = process.env.port || 3001

import types from '../types'
import pokemon from '../pokemon'

const app = express()

app.use(
  cors({
    allowedOrigins: ['localhost:3000']
  })
)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello pokemon!')
})

app.get('/types', (req, res) => {
  res.status(200).send(types)
})

app.get('/types/:id', (req, res) => {
  const found = types.find(type => type.id === req.params.id)
  found ? res.status(200).send(found) : res.status(404).send('Not found')
})

app.get('/pokemon', (req, res) => {
  res.status(200).send(pokemon)
})

app.get('/pokemon/:id', (req, res) => {
  const found = pokemon.find(poke => poke.id === req.params.id)
  found ? res.status(200).send(found) : res.status(404).send('Not found')
})

app.listen(port)
