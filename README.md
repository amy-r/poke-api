# Pokemon API

You'll be using this API to complete to final assesment. You won't need to make any changes to this project, just
getting it up and running will allow you to hit all of the endpoints. Make sure to read all of the documentation to
ensure you know how to use the api once you've got it started.

## Get up and running

1) Clone the repo `git clone git@github.com:turingschool-examples/poke-api.git`  
2) Install dependencies `cd poke-api && npm install`  
3) Start the api `npm start`  
4) Visit the root enpoint `localhost:3001`

## Endpoints

### `GET /types`

- Returns JSON data for all available Pokemon Types.
- You can expect to receive an array of Type JSON objects

```
[
  {
    "id": "1",
    "name": "normal",
    "pokemon": [
      "16",
      "17",
      "18",
      "19",
      "20"
    ]
  },
]
```

### `GET /types/:id`

- Returns JSON data for a single Pokemon Type, based on the id of that type.
- You can expect to receive a Type JSON object

```
{
  "id": "1",
  "name": "normal",
  "pokemon": [
    "16",
    "17",
    "18",
    "19",
    "20"
  ]
}
```

### `GET /pokemon`

- Returns JSON data for all available Pokemon.
- You can expect to receive an array of Pokemon JSON objects

```
[
  {
    "name": "pidgey",
    "id": "16",
    "type": "1",
    "weight": 18,
    "sprites": {
      "back_female": null,
      "back_shiny_female": null,
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
      "front_female": null,
      "front_shiny_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png",
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png"
    }
  },
]
```

### `GET /pokemon/:id`

- Returns JSON data for a single Pokemon, based on the id of the pokemon.
- You can expect to receive a Pokemon JSON object

```
{
  "name": "pidgey",
  "id": "16",
  "type": "1",
  "weight": 18,
  "sprites": {
    "back_female": null,
    "back_shiny_female": null,
    "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
    "front_female": null,
    "front_shiny_female": null,
    "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/16.png",
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/16.png"
  }
},
```
